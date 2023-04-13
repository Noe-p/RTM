import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { H1, P1 } from '../../components/Typos';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export function Partenaire(): JSX.Element {
  return (
    <Layout>
      <Main>
        <TitleButtonContainer>
          <H1>Devenir partenaire</H1>
          <ButtonContainer>
            <LinkStyled to='/qui-sommes-nous/partenaires'>
              <ButtonStyled isWhite text='Découvrir nos partenaires' />
            </LinkStyled>
          </ButtonContainer>
        </TitleButtonContainer>
        <P1>Comment devenir partenaire chez Réveille Ta Moelle ? </P1>
        <P1><ArrowStyled/> Participer à l’organisation des événements qui associent l'information à l'art et la musique électronique pour faire découvrir au plus grand nombre le don de moelle osseuse.</P1>
        <P1><ArrowStyled/> Contribuer financièrement à la guérison de milliers de patients atteints d’une maladie grave du sang.</P1>
        <P1><ArrowStyled/>  Renforcer vos engagements de partage et d’entraide</P1>
        
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