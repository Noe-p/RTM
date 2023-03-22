import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
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
  const [isHover, setIsHover] = useState(false);

  return (
    <ButtonStyled
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={className}
      style={style}
      $isWhite={isWhite}
    >
      {text} {arrow && <ArrowStyled $isHover={isHover} />}
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
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

const ArrowStyled = styled(ArrowRightIcon)<{ $isHover?: boolean }>`
  margin-left: 5px;
  transform: ${(props) =>
    props.$isHover ? 'translateX(2px)' : 'translateX(0px)'};
  transition: margin-left 0.3s ease-in-out;
  width: 15px;
`;
