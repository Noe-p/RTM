import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { H1, P1 } from '../../components/Typos';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export function Benevole(): JSX.Element {
  return (
    <Layout>
      <Main>
        <H1Styled>Devenir bénévole</H1Styled>
        <P1>Comment devenir bénévole chez Réveille ta Moelle ?</P1>
        <P1>Nous tenons à vous remercier pour votre intérêt dans notre cause. </P1>
        <P1><ArrowStyled/> En acceptant d’être bénévole, vous permettez à de nouveaux inscrits d’être donneurs et ainsi, sauver de nombreuses vies qui ont besoin d’un don de moelle osseuse.</P1>
        <P1><ArrowStyled/> Nous sommes une équipe soudée et originale avec un fort esprit de cohésion qui vous accueillera à bras ouverts. </P1>
        <P1><ArrowStyled/> Inscrivez-vous dès maintenant et rejoignez Réveille Ta Moelle !</P1>
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
  width: 100%;
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
