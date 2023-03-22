import styled from 'styled-components';
import { Layout } from '../components/Layout';

interface QuiSommesNousProps {
  className?: string;
}

export function QuiSommesNous(props: QuiSommesNousProps): JSX.Element {
  const { className } = props;

  return (
    <Layout>
      <Main className={className}>
        <h1>Qui sommes nous ?</h1>
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
