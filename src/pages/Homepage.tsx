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
        <img src="/assets/page1/Rectangle 9.jpg" alt="banner"/>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
