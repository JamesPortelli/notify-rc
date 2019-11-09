import styled, { css } from 'styled-components';

import { Kind, Position } from './enums';

interface Props {
  kind: Kind;
  position: Position;
}

const themeColors = {
  [Kind.Success]: '#2e855f',
  [Kind.Warning]: '#ffb41e',
  [Kind.Error]: '#e41123',
  [Kind.Info]: '#bbe0fd'
};

export const Container = styled.div<Props>`
  position: fixed;
  color: white;
  background-color: ${props => themeColors[props.kind]};
 
  ${props =>
    props.position === Position.TopLeft &&
    css`
      top: 10px;
      left: 10px;
      width: 300px;
      height: 130px;
    `}

  ${props =>
    props.position === Position.TopRight &&
    css`
      top: 10px;
      right: 10px;
      width: 300px;
      height: 130px;
    `}

  ${props =>
    props.position === Position.BottomLeft &&
    css`
      bottom: 10px;
      left: 10px;
      width: 300px;
      height: 130px;
    `}

  ${props =>
    props.position === Position.BottomRight &&
    css`
      bottom: 10px;
      right: 10px;
      width: 300px;
      height: 130px;
    `}

  ${props =>
    props.position === Position.Centre &&
    css`
      top: 50%;
      left: 50%;
      width: 300px;
      height: 130px;
      margin-left: -160px;
      margin-top: -75px;
    `}

  ${props =>
    props.position === Position.Top &&
    css`
      top: 0;
      left: 0;
      right: 0;
    `}

  ${props =>
    props.position === Position.Bottom &&
    css`
      bottom: 0;
      left: 0;
      right: 0;
    `}

  ${props =>
    (props.position === Position.Top || props.position === Position.Bottom) &&
    css`
      :after {
        content: '';
        display: table;
        clear: both;
      }
    `}
`;
