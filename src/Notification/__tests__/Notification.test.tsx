import React from 'react';
import { render } from '@testing-library/react';

import { Notification } from '../';
import { Kind, Position } from '../enums';

const setup = (propsOverride = {}) => {
  const props = {
    kind: Kind.Success,
    message: 'Test',
    onClose: jest.fn(),
    ...propsOverride
  };

  return {
    props,
    ...render(<Notification {...props} />)
  };
};

describe('Notification Tests', () => {
  describe('Kind', () => {
    describe('when kind is success', () => {
      it('will render success styled Notification', () => {
        const { container } = setup({ kind: Kind.Success });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when kind is warning', () => {
      it('will render warning styled Notification', () => {
        const { container } = setup({ kind: Kind.Warning });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when kind is error', () => {
      it('will render error styled Notification', () => {
        const { container } = setup({ kind: Kind.Error });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when kind is info', () => {
      it('will render info styled Notification', () => {
        const { container } = setup({ kind: Kind.Info });

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Position', () => {
    describe('when position is Top', () => {
      it('will render the notification in the Top position', () => {
        const { container } = setup({ position: Position.Top });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when position is Bottom', () => {
      it('will render the notification in the Bottom position', () => {
        const { container } = setup({ position: Position.Bottom });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when position is TopLeft', () => {
      it('will render the notification in the TopLeft position', () => {
        const { container } = setup({ position: Position.TopLeft });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when position is TopRight', () => {
      it('will render the notification in the TopRight position', () => {
        const { container } = setup({ position: Position.TopRight });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when position is BottomLeft', () => {
      it('will render the notification in the BottomLeft position', () => {
        const { container } = setup({ position: Position.BottomLeft });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when position is BottomRight', () => {
      it('will render the notification in the BottomRight position', () => {
        const { container } = setup({ position: Position.BottomRight });

        expect(container).toMatchSnapshot();
      });
    });

    describe('when position is Centre', () => {
      it('will render the notification in the Centre position', () => {
        const { container } = setup({ position: Position.Centre });

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Timer', () => {
    describe('when seconds are provided', () => {
      it('will render the timer', () => {
        const { queryByTestId } = setup({ seconds: 1 });

        expect(queryByTestId('timer-bar')).toBeInTheDocument();
      });
    });

    describe('when seconds are not provided', () => {
      it('will not render the timer', () => {
        const { queryByTestId } = setup();

        expect(queryByTestId('timer-bar')).not.toBeInTheDocument();
      });
    });
  });
});
