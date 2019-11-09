import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';

import { CloseButton } from '../CloseButton';
import { Position } from '../enums';

const setup = (propsOverride = {}) => {
  const props = {
    position: Position.Top,
    onClick: jest.fn(),
    ...propsOverride
  };

  return {
    props,
    ...render(<CloseButton {...props} />)
  };
};

describe('CloseButton Tests', () => {
  describe('when position is TOP or Bottom', () => {
    it('will render a CloseButton floated to the right', () => {
      const { container } = setup();

      expect(container).toMatchSnapshot();
    });
  });

  describe('when position is not TOP or Bottom', () => {
    it('will render a CloseButton aligned to the right', () => {
      const { container } = setup({ position: Position.TopRight });

      expect(container).toMatchSnapshot();
    });
  });

  describe('when the close button is clicked', () => {
    it('will call the callback function', () => {
      const { getByTestId, props } = setup({ position: Position.TopRight });

      act(() => {
        fireEvent.click(getByTestId('close-button'));
      });

      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
