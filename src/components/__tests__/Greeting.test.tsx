import React from 'react';
import { render } from '@testing-library/react';

import { Greeting } from '../Greeting';

describe('Greeting Tests', () => {
  it('will render a greeting', () => {
    const { getByText } = render(<Greeting />);

    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
