import React from 'react';

import { useNotifier } from '../../src';
import { Position } from '../../src/Notification/enums';

import { Story, Section, Title, Button } from '../Components';

export function Banner() {
  const { showSuccessNotification, showInfoNotification, showWarningNotification, showErrorNotification } = useNotifier();

  return (
    <Story>
      <Section>
        <Title>Banners - Kind</Title>
        <Button onClick={() => showSuccessNotification('Success Banner')}>Success</Button>
        <Button onClick={() => showInfoNotification('Info Banner')}>Info</Button>
        <Button onClick={() => showWarningNotification('Warning Banner')}>Warning</Button>
        <Button onClick={() => showErrorNotification('Error Banner')}>Error</Button>
      </Section>

      <Section>
        <Title>Banners - Position</Title>
        <Button onClick={() => showSuccessNotification('Top Banner', { position: Position.Top })}>Top Banner</Button>
        <Button onClick={() => showInfoNotification('Bottom Banner', { position: Position.Bottom })}>Bottom Banner</Button>
      </Section>

      <Section>
        <Title>Banners - Timed</Title>
        <Button onClick={() => showSuccessNotification('Timed', { seconds: 1 })}>Timed</Button>
      </Section>
    </Story>
  );
}
