import parse from 'html-react-parser';
import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { WP_REST_API_Post } from 'wp-types';
import { Layout } from '../../components/Layout';
import { H1, H2, H3, P1 } from '../../components/Typos';

interface ActionProps {
  children?: ReactNode;
  className?: string;
}

export function Action(props: ActionProps): JSX.Element {
  const { children, className } = props;
  const [post, setPost] = useState<WP_REST_API_Post>();
  const { id } = useParams();

  function getPost() {
    fetch(`http://localhost:10023/wp-json/wp/v2/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  function formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  function renderHTMLMarkup(data: any) {
    if (data.props) {
      const type = data.type;
      const content = data.props.children;
      switch (type) {
        case 'p':
          return <P1>{content}</P1>;
        case 'h1':
          return <H1>{content}</H1>;
        case 'h2':
          return <H2>{content}</H2>;
        case 'h3':
          return <H3>{content}</H3>;
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

  return (
    <Layout>
      <Main className={className}>
        {post && (
          <div>
            <Title>{post.title.rendered}</Title>
            <DateStyled>{formatDate(new Date(post.date))}</DateStyled>
            {(parse(post.content.rendered) as any).map((item: any) =>
              renderHTMLMarkup(item)
            )}
          </div>
        )}
      </Main>
    </Layout>
  );
}

const Title = styled(H1)`
  text-transform: uppercase;
  margin: 0;
`;

const DateStyled = styled(P1)`
  font-style: italic;
  margin: 0;
`;
const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
`;
