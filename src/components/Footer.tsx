import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/constantes';
import { P1 } from './Typos';

export function Footer(): JSX.Element {
  return (
    <FooterStyled>
      <Logo>
        <Link to='/'>
          <img src='/assets/reveille-ta-moelle-logo 1.png' alt='logo' />
        </Link>
      </Logo>
      <LinkBox>
        <Link to='/nous-soutenir'>
          <P1Styled>Nous soutenir</P1Styled>
        </Link>
        <Link to='/actions'>
          <P1Styled>Actions</P1Styled>
        </Link>
        <Link to='/qui-sommes-nous'>
          <P1Styled>Qui sommes-nous ?</P1Styled>
        </Link>
        <Link to={{ pathname: '/qui-sommes-nous', hash: '#contact' }}>
          <P1Styled>Nous contacter</P1Styled>
        </Link>
      </LinkBox>
      <Social>
        <P1Styled>Retrouvez-nous sur :</P1Styled>
        <SocialGroup>
          <img src='/assets/facebook.png' alt='facebook' />
          <P1Styled>Réveille ta moëlle</P1Styled>
        </SocialGroup>
        <SocialGroup>
          <img src='/assets/instagram.png' alt='instagram' />
          <P1Styled>reveilletamoelle</P1Styled>
        </SocialGroup>
      </Social>
      <Others>
        <P1Styled>Mentions légales</P1Styled>
        <P1Styled>Politique de confidentialité</P1Styled>
      </Others>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2e2c73;
  color: white;
  justify-content: space-around;
  width: 100vw;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  width: 15%;
  display: flex;
  border-right: 2px solid ${COLORS.WHITE};
  justify-content: center;
  img {
    width: 143px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    padding-bottom: 30px;
    border-right: none;
    border-bottom: 2px solid ${COLORS.WHITE};
    width: 90%;
  }
`;

const LinkBox = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${COLORS.WHITE};
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin: 30px;
    padding-bottom: 30px;
    border-right: none;
    border-bottom: 2px solid ${COLORS.WHITE};
  }
`;

const P1Styled = styled(P1)`
  color: ${COLORS.WHITE};
  margin: 7px;
`;

const Social = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;
  color: white;
  border-right: 2px solid ${COLORS.WHITE};

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin: 30px;
    padding-bottom: 30px;
    border-right: none;
    border-bottom: 2px solid ${COLORS.WHITE};
  }
`;

const SocialGroup = styled.div`
  display: flex;
  img {
    width: 20px;
    height: 20px;
  }
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

const Others = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin: 30px;
  }
`;
