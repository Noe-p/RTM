import { ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/constantes';
import { H1 } from './Typos';

interface CardSoutenirProps {
  title: string;
  children?: ReactNode;
  leftImage?: string;
  rightImage?: string;
  className?: string;
}

export function CardSoutenir(props: CardSoutenirProps): JSX.Element {
  const { className, title, children, leftImage, rightImage } = props;

  return (
    <Main className={className}>
      <Container>
        {leftImage && <LeftImage src={leftImage} alt={title} />}
        <div>
          <H1Styled>{title}</H1Styled>
          {children}
        </div>
        {rightImage && <RightImage src={rightImage} alt={title} />}
      </Container>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 50px;
  border-radius: 10px;
  background-color: ${COLORS.GREY};
  padding-bottom: 50px;
`;
const Container = styled.div`
  display: flex;
  width: 90%;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;
    align-items: center;
    margin: 5%;
  }
`;

const H1Styled = styled(H1)`
  color: ${COLORS.BLUE};
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LeftImage = styled.img`
  width: 350px;
  height: 50%;
  margin-right: 50px;
  margin-top: 50px;
`;

const RightImage = styled.img`
  width: 350px;
  height: 50%;
  margin-left: 50px;
  margin-top: 50px;
`;
