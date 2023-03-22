import styled from 'styled-components';

interface ActionBlockProps {
  className?: string;
}

export function ActionBlock(props: ActionBlockProps): JSX.Element {
  const { className } = props;

  return (
    <ActionBlockStyled/>
  );
}

const ActionBlockStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: {colors.grey};
    text-align: center;
`