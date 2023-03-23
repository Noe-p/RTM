import styled from 'styled-components';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { H2, P1 } from '../components/Typos';

interface QuiSommesNousProps {
  className?: string;
}

export function QuiSommesNous(props: QuiSommesNousProps): JSX.Element {
  const { className } = props;

  return (
    <Layout>
      <Main className={className}>
        <Card>
          <Image src='/assets/qui-sommes-nous-1.png' alt='Qui sommes nous 1' />
          <TextContainer style={{ marginLeft: 50 }}>
            <Title>Réveille Ta Moelle c’est quoi ?</Title>
            <P1>
              RTM assure la promotion du don de moelle osseuse auprès des jeunes
              rennais. C’est une association depuis 2019 qui organise des
              événements gratuits pour sensibiliser et inviter à s’inscrire au
              registre des donneurs. Nous vous partageons nos{' '}
            </P1>
          </TextContainer>
        </Card>
        <Card>
          <TextContainer style={{ marginRight: 50 }}>
            <Title>Réveille Ta Moelle c’est qui ?</Title>
            <P1>
              C’est une association née d’une volonté de construire des
              rencontres simples et de proximité autour du don de moelle
              osseuse. Leur objectif est de faire découvrir et parler de cette
              cause différemment, en associant l’information à l’art et la
              musique électronique.  Basée à Rennes, l’association participe à
              la promotion du don de moelle osseuse en informant, sensibilisant
              et invitant les jeunes à s’inscrire pour le don de manière ludique
              et festive.
            </P1>
          </TextContainer>
          <Image src='/assets/qui-sommes-nous-2.png' alt='Qui sommes nous 2' />
        </Card>
        <ButtonStyled text='Nous contacter' />
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
  margin-top: 70px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 80%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 50%;
`;

const Title = styled(H2)``;

const Image = styled.img`
  width: 500px;
  height: 500px;
`;

const ButtonStyled = styled(Button)``;
