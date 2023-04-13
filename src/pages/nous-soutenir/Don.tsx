import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { H1, P1 } from '../../components/Typos';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export function Don(): JSX.Element {
  return (
    <Layout>
      <Main>
        <H1Styled>Faire un don</H1Styled>
        <P1>Pourquoi devenir donneur ? </P1>
        <P1><ArrowStyled/> Se porter volontaire au don est déjà un engagement fort.</P1>
        <P1><ArrowStyled/> Par votre simple inscription sur le registre français des donneurs de moelle osseuse, vous offrez une chance de guérison en plus aux patients.</P1>
        <br/>
        <P1><ArrowStyled/> Vous pourrez être fiers de vous et en parler à votre entourage : car faire connaître le don de moelle osseuse est aussi une façon de sauver des vies.</P1>
        
        <Link to={'https://www.helloasso.com/associations/reveille-ta-moelle/formulaires/1'}>
          <Image alt={'form-hello-asso'} src={'/assets/formDon.png'}/>
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
