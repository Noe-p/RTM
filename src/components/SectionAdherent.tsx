import styled from 'styled-components';
import { H2, P1 } from './Typos';

interface SectionAdherentProps {
  className?: string;
}

export function SectionAdherent(props: SectionAdherentProps): JSX.Element {
  const { className } = props;

  return (
    <SectionAdherentStyled>
        <H2>Nos adhérents</H2>
        <P1>Ils font avancer le projet, aident l’association avec <br/><P1Styled>leur motivation, leur partage et leur talent.</P1Styled></P1>
        <img alt="img-adherents" src="/assets/adherent-img.png"/>
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
    background-color: {colors.grey};
    text-align: center;
`

const P1Styled = styled(P1)`
    margin-top: 0;
    font-weight: bold;
`