import styled from 'styled-components';
import { ActionBlock } from './ActionBlock';
import { Button } from './Button';

export function ActionSection(): JSX.Element {
  return (
    <ActionSectionStyled>
      <ActionBlock />
      <Buttons>
        <LinkStyled target='_blank' href='https://dondemoelleosseuse.fr'>
          <ButtonStyled
            text='En savoir plus sur dondemoelleosseuse.fr'
            isWhite
            arrow={false}
          />
        </LinkStyled>
      </Buttons>
    </ActionSectionStyled>
  );
}

const ActionSectionStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 25px;
`;

const Buttons = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonStyled = styled(Button)`
  margin: 0 10px;
`;

const LinkStyled = styled.a`
  text-decoration: none;
`;
