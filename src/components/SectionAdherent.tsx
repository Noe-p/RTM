import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { H2, P1 } from './Typos';

interface SectionAdherentProps {
  className?: string;
}

export function SectionAdherent(props: SectionAdherentProps): JSX.Element {
  const { className } = props;

  return (
    <SectionAdherentStyled className={className}>
      <H2>Nos adhérents</H2>
      <P1>
        Ils font avancer le projet, aident l’association avec <br />
        <P1Styled>leur motivation, leur partage et leur talent.</P1Styled>
      </P1>
      <ImageAdherent alt='img-adherents' src='/assets/adherent-img.png' />
      <ButtonContainer>
        <LinkStyled to='/qui-sommes-nous/adherents'>
          <ButtonStyled text='Découvrir nos adhérents' />
        </LinkStyled>
      </ButtonContainer>
    </SectionAdherentStyled>
  );
}

const SectionAdherentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const P1Styled = styled(P1)`
  margin-top: 0;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonStyled = styled(Button)`
  margin: 10px;
`;

const ImageAdherent = styled.img`
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;
