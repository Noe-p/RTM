import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WP_REST_API_Posts } from 'wp-types';
import { COLORS } from '../styles/constantes';
import { POST_URL, ROOT_URL } from '../wordpress';
import { ActionCard } from './ActionCard';
import { Button } from './Button';
import { H2, P1 } from './Typos';

interface SectionActionProps {
  className?: string;
}

export function SectionAction(props: SectionActionProps): JSX.Element {
  const { className } = props;
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);

  function getFirstImage(content: string) {
    const regex = /<img[^>]+src="?([^"\s]+)"?[^>]*>/g;
    const match = regex.exec(content);
    return match ? match[1] : '';
  }

  function getDate(text: string) {
    const regex = /<p[^>]*>(.*?)<\/p>/g;
    const match = regex.exec(text);
    return match
      ? new Date(match[1].split('/').reverse().join('-'))
      : new Date();
  }

  function getPosts() {
    const rootURL = ROOT_URL;
    apiFetch.use(apiFetch.createRootURLMiddleware(rootURL));
    fetch(POST_URL)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts as WP_REST_API_Posts);
      });
  }

  function getThreeFirstPosts(posts: WP_REST_API_Posts) {
    const filteredPosts = posts.slice(0, 3);
    return filteredPosts;
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Main className={className}>
      <H2>Les actions de l’association</H2>
      <P1Styled>
        Nos actions au sein de l'association mêlent musique, art et inscription
        sur les listes de donneurs de moelle osseuse. Nous vous invitons à
        découvrir nos prochaines actions et nos actions passées pour mieux
        partager avec nous. <span>Événements gratuits</span>
      </P1Styled>
      <ActionContainer>
        {getThreeFirstPosts(posts).map((post) => (
          <ActionCard
            idAction={post.id}
            key={post.id}
            title={post.title.rendered}
            image={getFirstImage(post.content.rendered)}
            date={getDate(post.content.rendered)}
            isWhite
          />
        ))}
      </ActionContainer>
      <Button text='Toutes nos actions' />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GREY};
  margin-top: 25px;
  padding: 30px;
  flex-direction: column;
`;

const P1Styled = styled(P1)`
  width: 80%;
  text-align: center;
  span {
    color: ${COLORS.ORANGE};
    font-style: bold;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
`;
