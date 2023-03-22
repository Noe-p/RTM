import { ReactNode } from 'react';
import styled from 'styled-components';
import { H2 } from './Typos';

interface CardQuestionProps {
  className?: string;
  title: string;
  children?: ReactNode;
  leftImage?: string;
  rightImage?: string;
}

export function CardQuestion(props: CardQuestionProps): JSX.Element {
  const { className, title, children, leftImage, rightImage } = props;

  return (
    <Main className={className}>
      {leftImage && <LeftImage src={leftImage} alt={title} />}
      <Container>
        <H2>{title}</H2>
        {children}
      </Container>
      {rightImage && <RightImage src={rightImage} alt={title} />}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 50px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const LeftImage = styled.img`
  width: 350px;
  height: 50%;
  margin-right: 50px;
`;

const RightImage = styled.img`
  width: 350px;
  height: 50%;
  margin-left: 50px;
`;
