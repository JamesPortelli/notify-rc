import React from 'react';
import styled, { css } from 'styled-components';

import { Position } from './enums';

interface Props {
  position: Position;
  onClick(): void;
}

type ButtonProps = Pick<Props, 'position'>;

const Button = styled.div<ButtonProps>`
  margin: 10px;
  line-height: 0;

  > svg {
    cursor: pointer;
  }

  ${props =>
    props.position !== Position.Top && props.position !== Position.Bottom
      ? css`
          text-align: right;
        `
      : css`
          float: right;
        `}
`;

export function CloseButton({ position, onClick }: Props) {
  return (
    <Button position={position}>
      <svg data-testid="close-button" width="18" height="18" onClick={onClick}>
        <line x1="5" y1="13" x2="13" y2="5" stroke="white" strokeWidth="2" />
        <line x1="5" y1="5" x2="13" y2="13" stroke="white" strokeWidth="2" />
      </svg>
    </Button>
  );
}
