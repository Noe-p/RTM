import styled from 'styled-components';
import { Layout } from '../components/Layout';

interface NousSoutenirProps {
  className?: string;
}

export function NousSoutenir(props: NousSoutenirProps): JSX.Element {
  const { className } = props;

  return (
    <Layout>
      <Main className={className}>
        <h1>Nous soutenir</h1>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
