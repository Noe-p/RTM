import { ToggleMenuButton } from '@noe-p/react-buttons-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/constantes';
import { H1, P1 } from './Typos';

interface HeaderProps {
  className?: string;
  currentPage?: string;
}

export function Header(props: HeaderProps): JSX.Element {
  const { currentPage } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleResize() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Main>
      <Link to='/'>
        <img src='/reveille-ta-moelle-logo.png' alt='logo' />
      </Link>
      {!isMobile ? (
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
            <P1Styled $currentPage={currentPage === 'actions'}>
              Actions
            </P1Styled>
          </Link>
          <Link to='/qui-sommes-nous'>
            <P1Styled $currentPage={currentPage === 'qui-sommes-nous'}>
              Qui sommes-nous ?
            </P1Styled>
          </Link>
        </Nav>
      ) : (
        <Nav>
          <ToggleMenuButton
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            colorClose={COLORS.WHITE}
            colorOpen={COLORS.WHITE}
          />
          <Menu $isOpen={isMenuOpen}>
            <Link to='/'>
              <MenuLink $selected={currentPage === ''}>Accueil</MenuLink>
            </Link>
            <Link to='/nous-soutenir'>
              <MenuLink $selected={currentPage === 'nous-soutenir'}>
                Nous soutenir
              </MenuLink>
            </Link>
            <Link to='/actions'>
              <MenuLink $selected={currentPage === 'actions'}>Actions</MenuLink>
            </Link>
            <Link to='/qui-sommes-nous'>
              <MenuLink $selected={currentPage === 'qui-sommes-nous'}>
                Qui sommes-nous ?
              </MenuLink>
            </Link>
          </Menu>
        </Nav>
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
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
  z-index: 50;
  height: 100px;

  @media (max-height: 768px) {
    height: 80px;
    width: 100%;
  }
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

const Menu = styled.div<{ $isOpen: boolean }>`
  height: ${(props) => (props.$isOpen ? 'auto' : '0vh')};
  min-height: ${(props) => (props.$isOpen ? '92vh' : '0vh')};
  width: 100%;
  position: absolute;
  top: 100%;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  overflow: hidden;
  z-index: 100;
`;

const MenuLink = styled(H1)<{ $selected?: boolean }>`
  text-transform: uppercase;
  color: ${(props) => (props.$selected ? COLORS.BLACK : COLORS.GREY)};
  margin: 3px;
  transform: translateY(-85px);
  cursor: pointer;
  font-size: 2.2rem;
  text-align: center;

  @media (max-height: 500px) {
    transform: translateY(-20px);
  }
`;
