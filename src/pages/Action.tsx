import apiFetch from '@wordpress/api-fetch';
import parse from 'node-html-parser';
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

  function getPosts() {
    const rootURL = 'http://localhost:10023/wp-json/';
    apiFetch.use(apiFetch.createRootURLMiddleware(rootURL));
    fetch('http://localhost:10023/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts as WP_REST_API_Posts);
        const root = parse(posts[0].content.rendered);

        console.log('Fetch', root);
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
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
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
