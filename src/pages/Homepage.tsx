import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SecondBanner } from '../components/SecondBanner';
import { ActionSection } from '../components/ActionSection';

interface HomepageProps {
  className?: string;
}

export function Homepage(props: HomepageProps): JSX.Element {
  const { className } = props;

  return (
    <Layout>
      <Main className={className}>
        <img className={"ImageBanner"} src="/assets/page1/Rectangle 9.jpg" alt="banner"/>
        <SecondBanner/>
        <ActionSection/>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  .ImageBanner{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;