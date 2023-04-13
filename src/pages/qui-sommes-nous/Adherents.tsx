import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WP_REST_API_Post, WP_REST_API_Posts } from 'wp-types';
import { Layout } from '../../components/Layout';
import { H1, H2, P1 } from '../../components/Typos';
import { adherentsFixture } from '../../fixtures';
import { COLORS } from '../../styles/constantes';
import { POST_URL, ROOT_URL } from '../../wordpress';

export function Adherents(): JSX.Element {
  const [adherents, setAdherents] = useState<WP_REST_API_Posts>([]);

  function getFirstImage(content: string) {
    const regex = /<img[^>]+src="?([^"\s]+)"?[^>]*>/g;
    const match = regex.exec(content);
    return match ? match[1] : '';
  }

  function getAdherents() {
    const rootURL = ROOT_URL;
    apiFetch.use(apiFetch.createRootURLMiddleware(rootURL));
    fetch(POST_URL)
      .then((response) => response.json())
      .then((posts) => {
        const adherentsPost = posts.filter((post: WP_REST_API_Post) => {
          return post.categories?.includes(9);
        });
        setAdherents(adherentsPost as WP_REST_API_Posts);
      })
      .catch((error) => {
        setAdherents(adherentsFixture as WP_REST_API_Posts);
      });
  }

  function getOnlyText(content: string) {
    const regex = /<p[^>]*>(.*?)<\/p>/g;
    const match = regex.exec(content);
    return match ? match[1] : '';
  }

  useEffect(() => {
    getAdherents();
  }, []);

  return (
    <Layout>
      <Main>
        <P1Styled>Ils font bouger les choses</P1Styled>
        <H1Styled>Découvrez nos adhérents</H1Styled>
        <Description>
          Ils font avancer le projet, aident l’association avec leur motivation,{' '}
          <span>leur partage et leur talent.</span>
        </Description>
        {adherents.map((adherent) => {
          return (
            <AdherentCard key={adherent.id}>
              <ImageStyled
                src={
                  getFirstImage(adherent.content.rendered)
                    ? getFirstImage(adherent.content.rendered)
                    : '/assets/empty-image.png'
                }
              />
              <TextContainer>
                <Name>{adherent.title.rendered}</Name>
                <DateStyled>{`Adhérent depuis ${new Date(
                  adherent.date
                ).getFullYear()}`}</DateStyled>
                <P1>{getOnlyText(adherent.content.rendered)}</P1>
              </TextContainer>
            </AdherentCard>
          );
        })}
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
  margin-top: 80px;
`;

const H1Styled = styled(H1)`
  text-transform: uppercase;
  margin-top: 0;
`;

const P1Styled = styled(P1)`
  color: ${COLORS.ORANGE};
  font-style: italic;
`;

const AdherentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: ${COLORS.GREY};
  border-radius: 40px;
  margin-top: 30px;
  width: 80%;
  padding: 30px;
`;

const ImageStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 50px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const Name = styled(H2)`
  margin: 0;
  margin-bottom: 2px;
`;

const DateStyled = styled(P1)`
  margin: 0;
  margin-bottom: 10px;
  font-style: italic;
`;

const Description = styled(P1)`
  margin-top: 0;
  margin-bottom: 30px;
  width: 50%;
  text-align: center;

  span {
    font-weight: bold;
  }
`;
