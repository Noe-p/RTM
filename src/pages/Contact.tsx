import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { H1, P1 } from '../components/Typos';
import { COLORS } from '../styles/constantes';

export function Contact(): JSX.Element {
  return (
    <Layout>
      <Main>
        <H1Styled>Nous contacter</H1Styled>
        <CardContainer>
          <ContactCard href='#'>
            <IconContainer>
              <img src='/assets/icons/address.png' alt='Icon address' />
            </IconContainer>
            <P1Center color={'white'}>
              62 Boulevard Marbeuf Rennes, France, 35000
            </P1Center>
          </ContactCard>
          <ContactCard href='#'>
            <IconContainer>
              <img src='/assets/icons/phone.png' alt='Icon phone' />
            </IconContainer>
            <P1Center color={'white'}>06 33 15 41 87</P1Center>
          </ContactCard>
          <ContactCard href='#'>
            <IconContainer>
              <img src='/assets/icons/email.png' alt='Icon email' />
            </IconContainer>
            <P1Center color={'white'}>support@reveilletamoelle.fr</P1Center>
          </ContactCard>
        </CardContainer>
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
`;

const H1Styled = styled(H1)`
  color: ${COLORS.BLUE};
  text-transform: uppercase;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  margin: 20px;
  cursor: pointer;
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
