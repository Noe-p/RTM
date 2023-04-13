import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { WP_REST_API_Post, WP_REST_API_Posts } from 'wp-types';
import { partenaireFixture } from '../fixtures';
import { POST_URL, ROOT_URL } from '../wordpress';
import { Button } from './Button';
import { H2, P1 } from './Typos';

interface SectionPartenaireProps {
  className?: string;
}

export function SectionPartenaire(props: SectionPartenaireProps): JSX.Element {
  const { className } = props;
  const [partenaire, setPartenaire] = useState<WP_REST_API_Posts>([]);
  const [isMobile, setIsMobile] = useState(false);
  SwiperCore.use([Autoplay]);

  function getFirstImage(content: string) {
    const regex = /<img[^>]+src="?([^"\s]+)"?[^>]*>/g;
    const match = regex.exec(content);
    return match ? match[1] : '';
  }

  function getPosts() {
    const rootURL = ROOT_URL;
    apiFetch.use(apiFetch.createRootURLMiddleware(rootURL));
    fetch(POST_URL)
      .then((response) => response.json())
      .then((posts) => {
        const actionPosts = posts.filter((post: WP_REST_API_Post) => {
          return post.categories?.includes(11);
        });
        setPartenaire(actionPosts as WP_REST_API_Posts);
      })
      .catch((error) => {
        setPartenaire(partenaireFixture as WP_REST_API_Posts);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SectionPartenaireStyled className={className}>
      <H2>Nos partenaires</H2>
      <P1Styled>
        Notre projet n’aurait pas pu voir le jour sans l’implication et le
        soutien de nos partenaires. Ils contribuent tous les jours à faire
        avancer l’association et à faire découvrir le don de moelle osseuse
      </P1Styled>
      <LogosContainer>
        <Swiper spaceBetween={30} slidesPerView={3} loop={true} autoplay>
          {partenaire.map((post) => {
            return (
              <SwiperSlide key={post.id}>
                <ImagePartenaire
                  src={
                    getFirstImage(post.content.rendered)
                      ? getFirstImage(post.content.rendered)
                      : '/assets/empty-image.png'
                  }
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </LogosContainer>
      <ButtonContainer>
        <LinkStyled to='/qui-sommes-nous/partenaires'>
          <ButtonStyled isWhite text='Découvrir nos partenaire' />
        </LinkStyled>
        <LinkStyled to='/nous-soutenir/partenaire'>
          <ButtonStyled text='Devenir partenaire' />
        </LinkStyled>
      </ButtonContainer>
    </SectionPartenaireStyled>
  );
}

const SectionPartenaireStyled = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid black;
  margin-top: 50px;
`;

const P1Styled = styled(P1)`
  margin-top: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonStyled = styled(Button)`
  margin: 10px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const LogosContainer = styled.div`
  margin: 30px 0;
  width: 100%;
`;

const ImagePartenaire = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
