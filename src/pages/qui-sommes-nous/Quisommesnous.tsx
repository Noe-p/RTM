import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { H1, H2, H3, P1 } from '../../components/Typos';
import { COLORS } from '../../styles/constantes';

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

        <H1Styled>Nous contacter</H1Styled>
        <CardContainer id='contact'>
          <ContactCard href='http://maps.google.com/?q=62 Boulevard Marbeuf Rennes, France, 35000'>
            <IconContainer>
              <img src='/assets/icons/address.png' alt='Icon address' />
            </IconContainer>
            <P1Center color={'white'}>
              62 Boulevard Marbeuf Rennes, France, 35000
            </P1Center>
          </ContactCard>
          <ContactCard href='tel:06 33 15 41 87'>
            <IconContainer>
              <img src='/assets/icons/phone.png' alt='Icon phone' />
            </IconContainer>
            <P1Center color={'white'}>06 33 15 41 87</P1Center>
          </ContactCard>
          <ContactCard href='mailto:support@reveilletamoelle.fr'>
            <IconContainer>
              <img src='/assets/icons/email.png' alt='Icon email' />
            </IconContainer>
            <P1Center color={'white'}>support@reveilletamoelle.fr</P1Center>
          </ContactCard>
        </CardContainer>
        <ResauxContainer>
          <H3Styled>Nous suivre sur les réseaux sociaux</H3Styled>
          <div>
            <a href='https://www.facebook.com/ReveilleTaMoelle'>
              <IconResaux
                src='/assets/icons/facebook.png'
                alt='Icon facebook'
              />
            </a>
            <a href='https://www.instagram.com/reveilletamoelle/'>
              <IconResaux
                src='/assets/icons/instagram.png'
                alt='Icon instagram'
              />
            </a>
          </div>
        </ResauxContainer>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  width: 80%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
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

const H1Styled = styled(H1)`
  color: ${COLORS.BLUE};
  text-transform: uppercase;
  margin: 80px 10px;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContactCard = styled.a`
  display: flex;
  position: relative;
  background-color: ${COLORS.BLUE};
  border-radius: 10px;
  height: 100px;
  width: 300px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  text-decoration: none;
  color: ${COLORS.WHITE};

  :visited {
    color: ${COLORS.WHITE};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 57px;
  height: 57px;
  background-color: ${COLORS.ORANGE};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const P1Center = styled(P1)`
  text-align: center;
`;

const ResauxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: ${COLORS.GREY};
  width: 100%;
  border-radius: 10px;
`;

const H3Styled = styled(H3)`
  font-size: 20px;
  font-weight: bold;
`;

const IconResaux = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;
