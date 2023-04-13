import styled from 'styled-components';
import { COLORS } from '../styles/constantes';
import { H1, P1 } from './Typos';

export function SecondBanner(): JSX.Element {
  return (
    <SecondBannerStyled>
      <div>
        <P1Styled color={COLORS.ORANGE}>Un peu de culture</P1Styled>
        <H1Styled>Qu'est-ce que le don de moelle osseuse ?</H1Styled>
        <ExplicationsStyled>
          <ExplicationStyled>
            <ImageStyled
              alt={'moelle'}
              src={'/assets/icons/icon1.png'}
            ></ImageStyled>
            <P1Block>
              Chaque année,{' '}
              <P1StyledInline color={COLORS.ORANGE}>
                plus de 2 000 personnes
              </P1StyledInline>{' '}
              ont besoin dun don de moelle osseuse pour guérir une maladie grave
              du sang.
            </P1Block>
          </ExplicationStyled>
          <ExplicationStyled>
            <ImageStyled
              alt={'moelle'}
              src={'/assets/icons/icon2.png'}
            ></ImageStyled>
            <P1Block>
              La moelle osseuse (ne pas confondre avec moelle épinière) est une{' '}
              <P1StyledInline color={COLORS.ORANGE}>
                substance spongieuse située au milieu des os
              </P1StyledInline>
              .
            </P1Block>
          </ExplicationStyled>
          <ExplicationStyled>
            <ImageStyled
              alt={'moelle'}
              src={'/assets/icons/icon3.png'}
            ></ImageStyled>
            <P1Block>
              Le prélèvement est dans 80% des cas pratiqué{' '}
              <P1StyledInline color={COLORS.ORANGE}>
                sans chirurgie
              </P1StyledInline>
              , en ambulatoire (prélèvement de sang) mais peut aussi être
              effectué en anesthésie générale.
            </P1Block>
          </ExplicationStyled>
        </ExplicationsStyled>
      </div>
    </SecondBannerStyled>
  );
}

const SecondBannerStyled = styled.div`
  width: 80%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const P1Styled = styled(P1)`
  font-style: italic;
  font-weight: 600;
  text-align: center;
  display: inline;
`;

const P1StyledInline = styled(P1)`
  display: inline;
`;

const P1Block = styled(P1)`
  text-align: center;
`;

const H1Styled = styled(H1)`
  font-weight: 600;
  text-align: center;
  margin-top: 0;
`;

const ExplicationsStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ExplicationStyled = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 95%;
    margin-top: 20px;
  }
`;

const ImageStyled = styled.img`
  width: 50%;
  justify-content: center;
  @media (max-width: 768px) {
    width: 20%;
    margin-top: 20px;
  }
`;
