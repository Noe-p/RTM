import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { CardSoutenir } from '../components/CardSoutenir';
import { Layout } from '../components/Layout';
import { H1, P1 } from '../components/Typos';
import { COLORS } from '../styles/constantes';

export function NousSoutenir(): JSX.Element {
  return (
    <Layout>
      <Main>
        <H1Styled>Comment nous soutenir ?</H1Styled>
        <P1>
          Nous pouvons tous apporter votre pierre à l’édifice. Notre association
          accepte l’engagement de chacun pour aider au don de moelle osseuse.
          Que vous soyez donneurs de vie ! Que vous soyez bénévole au cœur de
          l’association ! Que vous soyez adhérents ! Que vous nous souteniez
          financièrement ! Participez avec nous à lutter contre les cancers du
          sang. Réveille-ta moelle est présente au cœur de l’action !
        </P1>
      </Main>
      <CardSoutenir
        title='Comment être un donneur de vie ?'
        rightImage='/assets/page1/Group2.png'
      >
        <>
          <P1Styled>En acceptant d’être donneur de vie :</P1Styled>
          <ul>
            <li>
              <P1Styled>Vous donner une chance à un patient de pouvoir guérir de sa maladie.</P1Styled>
            </li>
            <li>
              <P1Styled> Vous lui donnez une chance de pouvoir revivre normalement</P1Styled>
            </li>
            <li>
              <P1Styled>Vous pouvez changer sa vie, celle de sa famille, et la votre.</P1Styled>
            </li>
          </ul>
          <P1Styled>
            Le don est un acte de bravoure et de bonté.
            N’attendez plus et  inscrivez-vous !
          </P1Styled>
        </>
        <ButtonStyled text='Devenir donneur sur dondemoelleosseuse.fr' />
      </CardSoutenir>
      <CardSoutenir
        title='Comment faire un don ?'
        rightImage='/assets/page1/Group1.png'
      >
        <>
          <P1Styled>
            Tout le monde peut faire un don à Réveille Ta Moelle ! 
          </P1Styled>
          <P1Styled>
            Il n’y a pas de petits dons , il n’y a que de grandes participations ! Nous avons besoins de vous pour faire avancer l’association et faire connaître au mieux le don de moelle osseuse.
          </P1Styled>
        </>
        <ButtonStyled text='Faire un don' />
      </CardSoutenir>
      <CardSoutenir
        title='Qu’est-ce qu’un bénévole ?'
        rightImage='/assets/page1/Group3.png'
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
              <P1Styled>Partagez nos combats sur les réseaux sociaux </P1Styled>
            </li>
          </ul>
        </>
        <LinkStyled to='/benevoles'>
          <ButtonStyled text='Devenez bénévole'/>
        </LinkStyled>
      </CardSoutenir>
      <CardSoutenir
        title='Comment devenir un partenaire ?'
        rightImage='/assets/page1/Group4.png'
      >
        <>
          <P1Styled>
            Vous êtes acteur local et sensible à la cause du don de moelle osseuse ?
          </P1Styled>
          <P1Styled>{'-> Soyons partenaires ! '}</P1Styled>
          <P1Styled>
            Forts d’une équipe diversifiée et d’une association originale, nous attestons d’une forte implication de nos partenaires actuels :  
          </P1Styled>
          <P1Styled>
            L’EFS de Rennes, l’Agence de la Biomédecine et bien d’autres !          
          </P1Styled>
          <P1Styled>
            Nous tenons à vous remercier sincèrement car notre projet ne pourrait pas avoir lieu sans vous !
          </P1Styled>
        </>
        <ButtonStyled text='Devenir partenaire' />
      </CardSoutenir>
      <CardSoutenir
        title='Qu’est-ce qu’un adhérent ?'
        rightImage='/assets/page1/Group5.png'
      >
        <>
          <P1Styled>
            Tout le monde peut être adhérent !           
          </P1Styled>
          <P1Styled>
            En le devenant, vous faites partie de l’aventure, vous soutenez le projet par votre motivation et votre partage sur les réseaux sociaux.          
          </P1Styled>
        </>
        <ButtonStyled text='Devenir adhérent' />
      </CardSoutenir>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  text-align: left;
`;

const H1Styled = styled(H1)`
  width: 100%;
`;

const ButtonStyled = styled(Button)`
  margin-top: 30px;
`;

const P1Styled = styled(P1)`
  color: ${COLORS.BLUE};
  margin-bottom: 10px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;