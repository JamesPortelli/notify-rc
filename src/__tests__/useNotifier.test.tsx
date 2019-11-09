import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';

import { useNotifier, NotifierProvider } from '..';

const TestComponent = () => {
  const { showSuccessNotification, showInfoNotification, showWarningNotification, showErrorNotification } = useNotifier();

  return (
    <div>
      <button onClick={() => showSuccessNotification('Success Banner')}>Success</button>
      <button onClick={() => showInfoNotification('Info Banner')}>Info</button>
      <button onClick={() => showWarningNotification('Warning Banner')}>Warning</button>
      <button onClick={() => showErrorNotification('Error Banner')}>Error</button>
    </div>
  );
};

const setup = () => {
  return render(
    <NotifierProvider>
      <TestComponent />
    </NotifierProvider>
  );
};

describe('useNotifier Tests', () => {
  describe('when useNotifier is used without being wrapped by the NotifierProvider', () => {
    it('will throw an error', () => {
      // Mocking console.error to avoid unnecessary logs to console.
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => render(<TestComponent />)).toThrowError('useNotifier must be used within a NotifierProvider');
      spy.mockRestore();
    });
  });

  describe('when showSuccessNotification is called', () => {
    it('will render a success notification with the message provided', () => {
      const { getByText } = setup();

      act(() => {
        fireEvent.click(getByText('Success'));
      });

      expect(getByText('Success Banner')).toBeInTheDocument();
    });
  });

  describe('when showInfoNotification is called', () => {
    it('will render a info notification with the message provided', () => {
      const { getByText } = setup();

      act(() => {
        fireEvent.click(getByText('Info'));
      });

      expect(getByText('Info Banner')).toBeInTheDocument();
    });
  });

  describe('when showWarningNotification is called', () => {
    it('will render a warning notification with the message provided', () => {
      const { getByText } = setup();

      act(() => {
        fireEvent.click(getByText('Warning'));
      });

      expect(getByText('Warning Banner')).toBeInTheDocument();
    });
  });

  describe('when showErrorNotification is called', () => {
    it('will render a error notification with the message provided', () => {
      const { getByText } = setup();

      act(() => {
        fireEvent.click(getByText('Error'));
      });

      expect(getByText('Error Banner')).toBeInTheDocument();
    });
  });
});
