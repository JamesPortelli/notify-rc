import React from 'react';
import { act, render } from '@testing-library/react';

import { Timer } from '../Timer';

const setup = () => {
  const props = {
    seconds: 2,
    onTimeout: jest.fn()
  };

  return {
    props,
    ...render(<Timer {...props} />)
  };
};

describe('Timer Tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  describe('when the time has elapsed', () => {
    it('will call the onTimeout callback', () => {
      const { props } = setup();

      act(() => {
        jest.advanceTimersByTime(props.seconds * 1000);
      });

      expect(props.onTimeout).toHaveBeenCalled();
    });
  });
});
