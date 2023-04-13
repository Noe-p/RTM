import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/constantes';
import { Button } from './Button';
import { CardQuestion } from './CardQuestion';
import { P1 } from './Typos';

interface SectionQuestionProps {
  className?: string;
}

export function SectionQuestion(props: SectionQuestionProps): JSX.Element {
  const { className } = props;

  return (
    <Main className={className}>
      <CardQuestionStyled leftImage='/assets/page1/Group4.png' title='Nous soutenir'>
        <>
          <P1Styled>
            La greffe de moelle osseuse permet à des milliers de personnes de
            guérir et reprendre espoir en l’avenir.{' '}
          </P1Styled>
          <P1Styled>
            Pour changer la vie de ces patients, soutenez nous en faisant des
            dons occasionnels, en devenant bénévole, partenaire ou adhérent et
            partagez au plus grand nombre l’envie de devenir donneur !
          </P1Styled>
          <LinkStyled to='/nous-soutenir'>
            <ButtonStyled text='Nous soutenir' />
          </LinkStyled>
        </>
      </CardQuestionStyled>
      <CardContainer>
        <CardQuestionStyled
          title='Qui sommes-nous ?'
          rightImage='/assets/page1/Group2.png'
        >
          <>
            <P1Styled>
              Réveille Ta Moelle a une volonté : construire des rencontres simples
              et de proximité autour du don de moelle osseuse.{' '}
            </P1Styled>
            <P1Styled>
              Ce don représente le seul espoir de guérison pour de nombreuses
              personnes en attente de greffe.
            </P1Styled>
            <P1Styled>
              Notre objectif est de faire découvrir et parler de cette cause
              différemment, en organisant des événements qui associent
              l'information à l'art et la musique électronique.
            </P1Styled>
            <LinkStyled to='/qui-sommes-nous'>
              <ButtonStyled text='Qui sommes-nous ?' />
            </LinkStyled>
          </>
        </CardQuestionStyled>
      </CardContainer>
    </Main>
  );
}


const CardContainer = styled.div`
  background-color: ${COLORS.WHITE};
  display: flex;
  padding-bottom: 20px;
  justify-content: center;
  img{
    height: 100%;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
`;

const P1Styled = styled(P1)`
  margin: 5px;
  padding: 0;
`;

const ButtonStyled = styled(Button)`
  margin-top: 20px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const CardQuestionStyled = styled(CardQuestion)`
  padding-bottom: 20px;
`;
