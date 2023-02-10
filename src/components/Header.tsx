import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps): JSX.Element {
  const { className } = props;

  return (
    <Main>
      <img src='/reveille-ta-moelle-logo.png' alt="logo" />
      <Nav>
        <Link to='/'><p>Accueil</p></Link>
        <Link to='/'><p>Nous soutenir</p></Link>
        <Link to='/action'><p>Actions</p></Link>
        <Link to='/quisommesnous'><p>Qui sommes-nous ?</p></Link>
        <Link to='/'><LastButton >Nous contacter</LastButton ></Link>
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
  height: 300px;
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

const LastButton = styled.p`
  display: block;
  padding : 10px;
  background-color: #FA4516;
  border-radius: 50px;
`
