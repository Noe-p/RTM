import styled from 'styled-components';
import { Layout } from '../components/Layout';

interface HomepageProps {
  className?: string;
}

export function Homepage(props: HomepageProps): JSX.Element {
  const { className } = props;

  return (
    <Layout>
      <Main className={className}>
        <h1>Homepage</h1>
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
