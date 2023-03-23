import styled from 'styled-components';

export function ActionBlock(): JSX.Element {
  return <ActionBlockStyled />;
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
`;
