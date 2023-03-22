import styled from 'styled-components';
import { ActionSection } from '../components/ActionSection';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { SecondBanner } from '../components/SecondBanner';
import { SectionAction } from '../components/SectionAction';
import { SectionQuestion } from '../components/SectionQuestion';
import { H1, P1 } from '../components/Typos';
import { COLORS } from '../styles/constantes';

interface HomepageProps {
  className?: string;
}

export function Homepage(props: HomepageProps): JSX.Element {
  const { className } = props;

  return (
    <Layout>
      <Main className={className}>
        <Banner>
          <img
            className={'ImageBanner'}
            src='/assets/page1/Rectangle 9.jpg'
            alt='banner'
          />
          <Caption>
            <H1Styled>REVEILLE TA MOËLLE</H1Styled>
            <P1Styled>
              Information, sensibilisation et invitation au don de moelle
              osseuse de manière ludique et festive
            </P1Styled>
          </Caption>
          <Button
            text='Nous soutenir'
            style={{
              position: 'absolute',
              bottom: '20px',
              margin: 'auto',
              left: '0',
              right: '0',
            }}
          ></Button>
        </Banner>
        <SecondBanner />
        <ActionSection />
        <SectionAction />
        <SectionQuestion />
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
  .ImageBanner {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const Banner = styled.div`
  width: 100%;
  position relative;
`;

const Caption = styled.div`
  display: flex;
  width: 678px;
  height: 200px;
  background-color: ${COLORS.TRANSPARENT_BLUE};
  justify-content: center;
  position: absolute;
  bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  flex-direction: column;
  color: white;
  border-radius: 10px;
`;

const H1Styled = styled(H1)`
  color: white;
  margin: 0;
`;

const P1Styled = styled(P1)`
  color: white;
  padding: 0px 30px 0 30px;
`;
