import React from 'react';
import styled, { css } from 'styled-components';

import { Position } from './enums';

interface Props {
  position: Position;
  children: React.ReactChild;
}

export const Content = styled.div<Props>`
  margin: 10px;

  ${props =>
    (props.position === Position.Top || props.position === Position.Bottom) &&
    css`
      float: left;
    `};
`;
