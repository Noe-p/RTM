import { ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { children, className } = props;

  function getFirstPath() {
    return window.location.pathname.split('/')[1];
  }

  return (
    <Main className={className}>
      <Header currentPage={getFirstPath()} />
      {children}
      <Footer/>
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
