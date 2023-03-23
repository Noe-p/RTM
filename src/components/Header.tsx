import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/constantes';
import { Button } from './Button';
import { P1 } from './Typos';

interface HeaderProps {
  className?: string;
  currentPage?: string;
}

export function Header(props: HeaderProps): JSX.Element {
  const { currentPage } = props;

  return (
    <Main>
      <Link to='/'>
        <img src='/reveille-ta-moelle-logo.png' alt='logo' />
      </Link>
      <Nav>
        <Link to='/'>
          <P1Styled $currentPage={currentPage === ''}>Accueil</P1Styled>
        </Link>
        <Link to='/nous-soutenir'>
          <P1Styled $currentPage={currentPage === 'nous-soutenir'}>
            Nous soutenir
          </P1Styled>
        </Link>
        <Link to='/actions'>
          <P1Styled $currentPage={currentPage === 'actions'}>Actions</P1Styled>
        </Link>
        <Link to='/qui-sommes-nous'>
          <P1Styled $currentPage={currentPage === 'qui-sommes-nous'}>
            Qui sommes-nous ?
          </P1Styled>
        </Link>
        <Link to='/contact'>
          <Button text='Nous contacter' />
        </Link>
      </Nav>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.BLUE};
  width: 100%;
  color: white;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  position: fixed;
  top: 0;
  img {
    width: 30px;
    margin: 20px;
  }
  z-index: 999999;
  height: 100px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  a {
    text-decoration: none;
    margin: 0 20px;
    :visited {
      color: white;
    }
  }
`;
const P1Styled = styled(P1)<{ $currentPage?: boolean }>`
  color: white;
  opacity: ${({ $currentPage }) => ($currentPage ? 1 : 0.6)};
  transition: all 0.2s ease-in-out;

  ::after {
    content: '';
    display: block;
    width: ${({ $currentPage }) => ($currentPage ? '100%' : '0%')};
    height: 2px;
    background: ${COLORS.ORANGE};
    position: relative;
    transition: all 0.2s ease-in-out;
    top: 3px;
  }

  :hover {
    opacity: 1;
    ::after {
      width: 100%;
    }
  }
`;
