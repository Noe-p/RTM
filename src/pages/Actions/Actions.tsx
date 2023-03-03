import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WP_REST_API_Posts } from 'wp-types';
import { ActionCard } from '../../components/ActionCard';
import { Layout } from '../../components/Layout';
import { H1, H2, H3 } from '../../components/Typos';

interface ActionsProps {
  className?: string;
}

export function Actions(props: ActionsProps): JSX.Element {
  const { className } = props;
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);

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

  function filterOlderPosts(posts: WP_REST_API_Posts) {
    const today = new Date();
    const filteredPosts = posts.filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getDate() < today.getDate();
    });
    return filteredPosts;
  }

  function filterNewerPosts(posts: WP_REST_API_Posts) {
    const today = new Date();
    const filteredPosts = posts.filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getDate() >= today.getDate();
    });
    return filteredPosts;
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <Main className={className}>
        <Title>{'Les actions de l’association'}</Title>
        <H3Styled>
          {
            "Nos actions au sein de l'association mêlent musique, art et inscription sur les listes de donneurs de moelle osseuse. Nous vous invitons à découvrir nos prochaines actions et nos actions passées pour mieux partager avec nous. Événements gratuits"
          }
        </H3Styled>
        <H2Styled>{'Actions à venir'}</H2Styled>
        <CardContainer>
          {filterNewerPosts(posts).map((post) => (
            <ActionCard
              idAction={post.id}
              key={post.id}
              title={post.title.rendered}
              image={getFirstImage(post.content.rendered)}
              date={new Date(post.date)}
            />
          ))}
        </CardContainer>
        <H2Styled>{'Actions passées'}</H2Styled>
        <CardContainer>
          {filterOlderPosts(posts).map((post) => (
            <ActionCard
              idAction={post.id}
              key={post.id}
              title={post.title.rendered}
              image={getFirstImage(post.content.rendered)}
              date={new Date(post.date)}
            />
          ))}
        </CardContainer>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled(H1)`
  text-transform: uppercase;
  margin: 0;
  margin-top: 40px;
  width: 90%;
`;

const H3Styled = styled(H3)`
  width: 90%;
`;

const H2Styled = styled(H2)`
  text-align: center;
`;
