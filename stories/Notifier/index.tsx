import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';

import { Banner } from './Banner';
import { Toastr } from './Toastr';
import { NotifierProvider } from '../../src';

addDecorator(render => {
  return React.createElement(NotifierProvider, null, render());
});

storiesOf('Notifier', module)
  .add('Banner', () => <Banner />)
  .add('Toastrs', () => <Toastr />);
