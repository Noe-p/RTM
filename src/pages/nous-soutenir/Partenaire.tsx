import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { H1 } from '../../components/Typos';

export function Partenaire(): JSX.Element {
  return (
    <Layout>
      <Main>
        <H1Styled>Devenir Partenaire</H1Styled>
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
  width: 80%;
  text-align: left;
`;

const H1Styled = styled(H1)`
  width: 100%;
`;
