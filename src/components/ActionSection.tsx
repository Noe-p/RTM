import styled from 'styled-components';
import { ActionBlock } from './ActionBlock';
import { Button } from './Button';

interface ActionSectionProps {
  className?: string;
}

export function ActionSection(props: ActionSectionProps): JSX.Element {
  const { className } = props;

  return (
    <ActionSectionStyled>
      <ActionBlock/>
      <Buttons>
        <Button text='En savoir plus' isWhite/>
        <Button text='Nous soutenir'/>
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
    background-color: {colors.grey};
    text-align: center;
    margin-top: 25px;
`

const Buttons = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  `