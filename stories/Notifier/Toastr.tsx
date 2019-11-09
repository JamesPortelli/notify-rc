import React from 'react';

import { useNotifier } from '../../src';
import { Position } from '../../src/Notification/enums';

import { Story, Section, Title, Button } from '../Components';

export function Toastr() {
  const { showSuccessNotification, showInfoNotification, showWarningNotification, showErrorNotification } = useNotifier();

  return (
    <Story>
      <Section>
        <Title>Toastrs - Kind</Title>
        <Button onClick={() => showSuccessNotification('Success Banner', { position: Position.TopRight })}>Success</Button>
        <Button onClick={() => showInfoNotification('Info Banner', { position: Position.TopRight })}>Info</Button>
        <Button onClick={() => showWarningNotification('Warning Banner', { position: Position.TopRight })}>Warning</Button>
        <Button onClick={() => showErrorNotification('Error Banner', { position: Position.TopRight })}>Error</Button>
      </Section>

      <Section>
        <Title>Toastrs - Position</Title>
        <Button onClick={() => showSuccessNotification('Centre', { position: Position.Centre })}>Center Toastr</Button>
        <Button onClick={() => showSuccessNotification('Top Left', { position: Position.TopLeft })}>Top Left Toastr</Button>
        <Button onClick={() => showSuccessNotification('Top Right', { position: Position.TopRight })}>Top Right Toastr</Button>
        <Button onClick={() => showSuccessNotification('Bottom Left', { position: Position.BottomLeft })}>Bottom Left Toastr</Button>
        <Button onClick={() => showSuccessNotification('Bottom Right', { position: Position.BottomRight })}>Bottom Right Toastr</Button>
      </Section>

      <Section>
        <Title>Toastr - Timed</Title>
        <Button onClick={() => showSuccessNotification('Timed', { position: Position.TopRight, seconds: 1 })}>Timed</Button>
      </Section>
    </Story>
  );
}
