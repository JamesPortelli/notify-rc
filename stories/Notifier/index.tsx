import React from 'react';
import { storiesOf } from '@storybook/react';

import { Greeting } from '../../src';

storiesOf('Notifier', module).add('Standard', () => <Greeting />);
