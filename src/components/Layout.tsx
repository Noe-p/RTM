import { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { children, className } = props;

  return (
    <Main className={className}>
      <Header currentPage={window.location.pathname}/>
      {children}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
