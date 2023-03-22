import { ArrowRightIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';
import { COLORS } from '../styles/constantes';

interface ButtonProps {
  className?: string;
  text?: string;
  style?: React.CSSProperties;
  isWhite?: boolean;
  arrow?: boolean;
}

export function Button(props: ButtonProps): JSX.Element {
  const { text, style, isWhite, arrow = true, className } = props;

  return (
    <ButtonStyled className={className} style={style} $isWhite={isWhite}>
      {text} {arrow && <ArrowStyled />}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<{ $isWhite?: boolean }>`
  width: fit-content;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  border-radius: 50px;
  block-size: fit-content;
  border: ${COLORS.ORANGE} solid 2px;
  justify-self: center;
  :hover {
    background-color: ${COLORS.LIGHT_ORANGE};
    color: ${COLORS.ORANGE};
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.$isWhite ? COLORS.WHITE : COLORS.ORANGE};
  color: ${(props) => (props.$isWhite ? COLORS.ORANGE : COLORS.WHITE)};
`;

const ArrowStyled = styled(ArrowRightIcon)`
  margin-left: 5px;
  width: 15px;
`;
