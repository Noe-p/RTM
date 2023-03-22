import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { P1 } from './Typos';
import { COLORS } from '../styles/constantes';

interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps): JSX.Element {
  const { className } = props;

  return (
    <FooterStyled>
        <Logo>
            <img src='/assets/reveille-ta-moelle-logo 1.png' alt='logo' />
        </Logo>
        <LinkBox>
            <Link to='/nous-soutenir'><P1Styled>Nous soutenir</P1Styled></Link>
            <Link to='/actions'><P1Styled>Actions</P1Styled></Link>
            <Link to='/qui-sommes-nous'><P1Styled>Qui sommes-nous ?</P1Styled></Link>
            <Link to='/'><P1Styled>Nous contacter</P1Styled></Link>
        </LinkBox>
        <Social>
            <P1Styled>Retrouvez-nous sur :</P1Styled>
            <SocialGroup>
                <img src="/assets/facebook.png" alt="facebook"/>
                <P1Styled>Réveille ta moëlle</P1Styled>
            </SocialGroup>
            <SocialGroup>
                <img src="/assets/instagram.png" alt="instagram"/> 
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
    margin: auto;
    margin-top: 50px;
    padding: 10px;
    height : 213px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2e2c73;
    width: 100%;
    color: white;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
    justify-content: space-around;
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
`

const LinkBox = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${COLORS.WHITE};
    a {
        text-decoration: none;
    }
`

const P1Styled = styled(P1)`
    color: ${COLORS.WHITE};
    margin: 7px;
`

const Social = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    color: white;
    border-right: 2px solid ${COLORS.WHITE};
`

const SocialGroup = styled.div`
    display: flex;
    img {
        width: 20px;
        height: 20px;
    }
    align-items: center;
`

const Others = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    `