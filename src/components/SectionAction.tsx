import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { WP_REST_API_Post, WP_REST_API_Posts } from 'wp-types';
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
        const actionPosts = posts.filter((post: WP_REST_API_Post) => {
          return post.categories?.includes(10);
        });
        setPosts(actionPosts as WP_REST_API_Posts);
        console.log('SectionAction', posts);
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
      <H2Styled>Les actions de l’association</H2Styled>
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
      <LinkStyled to='/actions'>
        <Button text='Toutes nos actions' />
      </LinkStyled>
    </Main>
  );
}

const H2Styled = styled(H2)`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GREY};
  margin-top: 25px;
  padding: 30px;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    width: 95%;
  }
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
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;
