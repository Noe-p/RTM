import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

export function Header(props: HeaderProps): JSX.Element {
  const { children, className } = props;

  return (
    <Main>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/action'>
        <p>Action</p>
      </Link>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
