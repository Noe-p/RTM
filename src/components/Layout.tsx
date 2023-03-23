import { ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
  currentPage?: string;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { children, className, currentPage } = props;

  function getFirstPath() {
    return window.location.pathname.split('/')[1];
  }

  return (
    <Main className={className}>
      <Header currentPage={currentPage ? currentPage : getFirstPath()} />
      {children}
      <Footer />
    </Main>
  );
}

const Main = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
