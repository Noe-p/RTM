import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
      <img src='/reveille-ta-moelle-logo.png' alt="logo" />
      <Nav>
        <Link to='/'><P1Styled $currentPage={currentPage === "/"}>Accueil</P1Styled></Link>
        <Link to='/noussoutenir'><P1Styled $currentPage={currentPage === "/noussoutenir"}>Nous soutenir</P1Styled></Link>
        <Link to='/action'><P1Styled $currentPage={currentPage === "/action"}>Actions</P1Styled></Link>
        <Link to='/quisommesnous'><P1Styled $currentPage={currentPage === "/quisommesnous"}>Qui sommes-nous ?</P1Styled></Link>
        <Link to='/noussoutenir' ><Button text='Nous soutenir'/></Link>
      </Nav>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #2E2C73;
  width: 100%;
  height: 548px;
  color: white;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  img{
    width: 30px;
    margin: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  a{
    text-decoration: none;
    margin: 0 20px;
    :visited{
      color: white;
    }
  };
`
const P1Styled = styled(P1)<{ $currentPage?: boolean }>`
  color: white;
  padding-bottom: 7px;
  border-bottom: ${({ $currentPage }) => $currentPage ? '3px solid #FA4516' : 'none'};
`