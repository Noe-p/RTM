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
      <CardQuestion
        leftImage='/assets/page1/Group2.jpg'
        title='Comment être un donneur de vie ?'
      >
        <>
          <P1Styled>En acceptant d’être donneur de vie :</P1Styled>
          <ul>
            <li>
              <P1Styled>
                Vous donner une chance à un patient de pouvoir guérir de sa
                maladie.
              </P1Styled>
            </li>
            <li>
              <P1Styled>
                Vous lui donnez une chance de pouvoir revivre normalement
              </P1Styled>
            </li>
            <li>
              <P1Styled>
                Vous pouvez changer sa vie, celle de sa famille, et la votre.
              </P1Styled>
            </li>
          </ul>
          <P1Styled>
            Le don est un acte de bravoure et de bonté. N’attendez plus et
            inscrivez-vous !
          </P1Styled>
          <ButtonStyled text='S’inscrire en tant que donneur de vie' />
        </>
      </CardQuestion>
      <CardQuestion
        title='Qu’est-ce qu’un bénévole ?'
        rightImage='/assets/page1/Group2.jpg'
      >
        <>
          <P1Styled>
            Le bénévolat est un don de soi-même sous le signe de l’entraide.
          </P1Styled>
          <P1Styled>
            Apportez une aide précieuse pour convaincre de nouveaux donneurs :
          </P1Styled>
          <ul>
            <li>
              <P1Styled>Faites connaitre notre cause</P1Styled>
            </li>
            <li>
              <P1Styled>Participez à nos actions</P1Styled>
            </li>
            <li>
              <P1Styled>Partagez nos combats sur les réseaux sociaux</P1Styled>
            </li>
          </ul>

          <ButtonStyled text='Devenir bénévole' />
        </>
      </CardQuestion>
      <CardQuestion
        title='Comment devenir un adhérent ?'
        leftImage='/assets/page1/Group3.jpg'
      >
        <>
          <P1Styled>Tout le monde peut être adhérent !</P1Styled>
          <P1Styled>
            En le devenant, vous faites partie de l’aventure, vous soutenez le
            projet par votre motivation et votre partage sur les réseaux
            sociaux.:
          </P1Styled>
        </>
        <ButtonStyled text='Devenir adhérent' />
      </CardQuestion>
      <CardQuestion
        title='Comment devenir un partenaire ?'
        rightImage='/assets/page1/Group4.jpg'
      >
        <P1Styled>
          Vous êtes acteur local et sensible à la cause du don de moelle osseuse
          ? 
        </P1Styled>
        <P1Styled>Soyons partenaires !</P1Styled>
        <P1Styled>
          Forts d’une équipe diversifiée et d’une association originale, nous
          attestons d’une forte implication de nos partenaires actuels :  L’EFS
          de Rennes, l’Agence de la Biomédecine, l’Asso More, Pulse MSC, ÖND,
          Turtle Corporation, Flou, Organisme Texture, Chevreuil, Comme ça,
          Prestige, Osmoz, Prestige, Sons of Biche, Techno-vélo et le Barexpo.
          que nous remercions sincèrement. 
        </P1Styled>
        <P1Styled>Notre projet ne pourrait pas avoir lieu sans vous !</P1Styled>
        <ButtonStyled text='Devenir partenaire' />
      </CardQuestion>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${COLORS.GREY};
  margin-top: 50px;
  flex-direction: column;
  padding-bottom: 50px;
`;

const P1Styled = styled(P1)`
  margin: 5px;
  padding: 0;
`;

const ButtonStyled = styled(Button)`
  margin-top: 20px;
`;
