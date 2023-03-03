import { ReactNode } from 'react';
import styled from 'styled-components';

interface TyposProps {
  children?: ReactNode;
  className?: string;
  color?: string;
}

export function H1(props: TyposProps): JSX.Element {
  const { children, className, color = 'white' } = props;

  return (
    <H1Styled $color={color} className={className}>
      {children}
    </H1Styled>
  );
}

export function H2(props: TyposProps): JSX.Element {
  const { children, className, color = 'white' } = props;

  return (
    <H2Styled $color={color} className={className}>
      {children}
    </H2Styled>
  );
}

export function H3(props: TyposProps): JSX.Element {
  const { children, className, color = 'white' } = props;

  return (
    <H3Styled $color={color} className={className}>
      {children}
    </H3Styled>
  );
}

export function P1(props: TyposProps): JSX.Element {
  const { children, className, color = 'white' } = props;

  return (
    <P1Styled $color={color} className={className}>
      {children}
    </P1Styled>
  );
}

export function P2(props: TyposProps): JSX.Element {
  const { children, className, color = 'white' } = props;

  return (
    <P2Styled $color={color} className={className}>
      {children}
    </P2Styled>
  );
}

const H1Styled = styled.h1<{ $color: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  color: ${({ $color }) => $color};
`;

const H2Styled = styled.h2<{ $color: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: ${({ $color }) => $color};
`;

const H3Styled = styled.h3<{ $color: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 31px;
  color: ${({ $color }) => $color};
`;

const P1Styled = styled.p<{ $color: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${({ $color }) => $color};
`;

const P2Styled = styled.p<{ $color: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ $color }) => $color};
`;
