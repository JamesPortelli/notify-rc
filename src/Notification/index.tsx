import React from 'react';

import { Container } from './Container';
import { CloseButton } from './CloseButton';
import { Content } from './Content';
import { Timer } from './Timer';

import { Kind, Position } from './enums';

export interface NotificationProps {
  kind: Kind;
  message: React.ReactChild;
  position?: Position;
  seconds?: number;
  onClose(): void;
}

export function Notification({ kind, message, position = Position.Top, seconds, onClose }: NotificationProps) {
  return (
    <Container kind={kind} position={position}>
      <CloseButton position={position} onClick={onClose} />
      <Content position={position} children={message} />
      {seconds && <Timer seconds={seconds} onTimeout={onClose} />}
    </Container>
  );
}
