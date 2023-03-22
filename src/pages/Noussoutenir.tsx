import styled from 'styled-components';
import { Button } from '../components/Button';
import { CardSoutenir } from '../components/CardSoutenir';
import { Layout } from '../components/Layout';
import { H1, P1 } from '../components/Typos';
import { COLORS } from '../styles/constantes';

interface NousSoutenirProps {
  className?: string;
}

export function NousSoutenir(props: NousSoutenirProps): JSX.Element {
  const { className } = props;

  return (
    <Layout>
      <Main className={className}>
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
        title='Devenir Donneur de vie'
        rightImage='/assets/page1/Group2.jpg'
      >
        <>
          <P1Styled>Découvrez si vous avez le profil du donneur :</P1Styled>
          <ul>
            <li>
              <P1Styled>Être âgé de 18 à 35 ans</P1Styled>
            </li>
            <li>
              <P1Styled>
                Être en parfaite santé et ne pas souffrir de maladies chroniques
                avec des traitements imposés.
              </P1Styled>
            </li>
            <li>
              <P1Styled>Accepter de remplir un questionnaire de santé</P1Styled>
            </li>
            <li>
              <P1Styled>
                Effectuer une prise de sang pour établir sa carte d’identité
                génétique pour établir votre compatibilité avec un patient
                malade
              </P1Styled>
            </li>
          </ul>
          <P1Styled>
            Le don de moelle osseuse ne peut être pratiqué qu’une seule fois. Le
            donneur est retiré du registre des donneurs une fois que celui-ci
            est effectué. Dans de rares cas (10% seulement), un complément peut
            vous être demandé.
          </P1Styled>
          <P1Styled>
            En étant inscrit, vous ne serez pas automatiquement appelé à faire
            un don. Votre profil sera étudié afin de vérifier si vous
            correspondez aux critères de sélection cités ci-dessus, afin
            d’effectuer le don en toute sécurité.
          </P1Styled>
        </>
        <ButtonStyled text='Devenir donneur' />
      </CardSoutenir>
      <CardSoutenir
        title='Devenir bénévole'
        rightImage='/assets/page1/Group1.jpg'
      >
        <>
          <P1Styled>
            Nous tenons à vous remercier pour votre intérêt dans notre cause.
          </P1Styled>
          <P1Styled>
            En acceptant d’être bénévole, vous permettez à de nouveaux inscrits
            d’être donneurs et ainsi, sauver de nombreuses vies qui ont besoin
            d’un don de moelle osseuse.
          </P1Styled>
          <P1Styled>
            Nous sommes une équipe soudée et originale avec un fort esprit de
            cohésion qui vous accueillera à bras ouverts.
          </P1Styled>
          <P1Styled>
            Inscrivez-vous dès maintenant et rejoignez Réveille Ta Moelle !
          </P1Styled>
        </>
        <ButtonStyled text='Devenir bénévole' />
      </CardSoutenir>
      <CardSoutenir
        title='Devenir adhérent'
        rightImage='/assets/page1/Group3.jpg'
      >
        <>
          <P1Styled>
            Particulier ou professionnel, individuel ou collectif, vous êtes
            tous les bienvenus chez Réveille Ta Moelle !
          </P1Styled>
          <P1Styled>
            Si vous souhaitez faire avancer le projet avec nous, accompagné de
            votre motivation et vos talents, devenez adhérent !
          </P1Styled>
          <P1Styled>
            Découvrez nos adhérents et leurs missions au sein de notre
            association !
          </P1Styled>
        </>
        <ButtonStyled text='Découvrir les adhérents' isWhite />
        <ButtonStyled style={{ marginTop: 10 }} text='Devenir adhérent' />
      </CardSoutenir>
      <CardSoutenir
        title='Devenir partenaire'
        rightImage='/assets/page1/Group4.jpg'
      >
        <>
          <P1Styled>
            {'-> Soignez de nombreuses vies en participant à nos actions.'}
          </P1Styled>
          <P1Styled>{'-> Changez la vie des patients '}</P1Styled>
          <P1Styled>
            {
              '-> Une action qui changera votre vision sur le don de moelle osseuse.'
            }
          </P1Styled>
        </>
        <ButtonStyled text='Devenir partenaire' />
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
`;
