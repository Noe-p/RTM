import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActionBlock } from './ActionBlock';
import { Button } from './Button';

export function ActionSection(): JSX.Element {
  return (
    <ActionSectionStyled>
      <ActionBlock />
      <Buttons>
        <ButtonStyled text='En savoir plus ?' isWhite arrow={false} />
        <LinkStyled to='/nous-soutenir'>
          <ButtonStyled text='Nous soutenir' />
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

const LinkStyled = styled(Link)`
  text-decoration: none;
`;
