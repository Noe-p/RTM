import apiFetch from '@wordpress/api-fetch';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WP_REST_API_Posts } from 'wp-types';
import { Layout } from '../components/Layout';

interface ActionProps {
  className?: string;
}

export function Action(props: ActionProps): JSX.Element {
  const { className } = props;
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);

  function renderHTMLMarkup(data: any) {
    if (data.props) {
      const type = data.type;
      const content = data.props.children;
      switch (type) {
        case 'p':
          return <p>{content}</p>;
        case 'h1':
          return <h1>{content}</h1>;
        case 'h2':
          return <h2>{content}</h2>;
        case 'h3':
          return <h3>{content}</h3>;
        case 'h4':
          return <h4>{content}</h4>;
        case 'h5':
          return <h5>{content}</h5>;
        case 'h6':
          return <h5>{content}</h5>;
        case 'img':
          return <Image src={data.props.src} alt={data.props.alt} />;
        case 'figure':
          return (
            <ImagesContainer>
              {data.props.children.length > 1
                ? data.props.children.map(
                    (item: any) =>
                      item.type === 'img' &&
                      renderHTMLMarkup(item.props.children)
                  )
                : renderHTMLMarkup(data.props.children)}
            </ImagesContainer>
          );
        case 'ul':
          return (
            <ul>
              {data.props.children.map(
                (item: any) => item.type === 'li' && renderHTMLMarkup(item)
              )}
            </ul>
          );
        case 'li':
          return <li>{content}</li>;
        default:
          return <></>;
      }
    }
  }

  function getFirstImage(content: string) {
    const regex = /<img[^>]+src="?([^"\s]+)"?[^>]*>/g;
    const match = regex.exec(content);
    return match ? match[1] : '';
  }

  function getPosts() {
    const rootURL = 'http://localhost:10023/wp-json/';
    apiFetch.use(apiFetch.createRootURLMiddleware(rootURL));
    fetch('http://localhost:10023/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts as WP_REST_API_Posts);
        console.log('Action', getFirstImage(posts[0].content.rendered));
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <Main className={className}>
        <h1>Action</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
            {(parse(post.content.rendered) as any).map((item: any) =>
              renderHTMLMarkup(item)
            )}
            <FirstImage src={getFirstImage(post.content.rendered)} />
          </div>
        ))}
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 200px;
`;

const FirstImage = styled.img`
  width: 100px;
  height: 100px;
  border: solid 1px black;
  border-radius: 50%;
`;
