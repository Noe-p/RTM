import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { H1, P1 } from '../../components/Typos';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export function Adherent(): JSX.Element {
  return (
    <Layout>
      <Main>
        <TitleButtonContainer>
          <H1Styled>Devenir adhérent</H1Styled>
          <ButtonContainer>
            <LinkStyled to='/qui-sommes-nous/adherents'>
              <ButtonStyled isWhite text='Découvrir nos adhérents' />
            </LinkStyled>
          </ButtonContainer>
        </TitleButtonContainer>

        <P1>Qu’est-ce qu’un adhérent chez Réveille Ta Moelle ?</P1>
        <P1><ArrowStyled/> Nos adhérents sont des acteurs majeurs de notre association. Nous ne serions sans eux. Ils participent, organisent et encadrent nos évènements et nos actions associatifs. </P1>
        <P1><ArrowStyled/> Leur soutien est indispensable aux bons déroulement de la vie de l’association Réveille Ta Moelle! </P1>
        <P1><ArrowStyled/> Nous souhaitons les remercier de leur engagement. </P1>
        
        <Link to={'https://www.helloasso.com/associations/reveille-ta-moelle/adhesions/adhesion-rtm-2023'}>
          <Image alt={'form-hello-asso'} src={'/assets/form.png'}/>
        </Link>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 75%;
  text-align: left;
`;

const H1Styled = styled(H1)`
`;

const ArrowStyled = styled(ArrowRightIcon)`
  margin-left: 5px;
  width: 15px;
`;

const Image = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
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

const TitleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
