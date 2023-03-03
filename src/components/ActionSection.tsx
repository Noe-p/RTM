import styled from 'styled-components';
import { ActionBlock } from './ActionBlock';

interface ActionSectionProps {
  className?: string;
}

export function ActionSection(props: ActionSectionProps): JSX.Element {
  const { className } = props;

  return (
    <ActionSectionStyled>
      <ActionBlock/>
    </ActionSectionStyled>
  );
}

const ActionSectionStyled = styled.div`
    width: 100%;
    height: 2227px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: {colors.grey};
    text-align: center;
    margin-top: 50px;
`