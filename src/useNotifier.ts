import React, { useContext, useCallback } from 'react';

import { NotifierContext, NotificationDetails } from './NotifierProvider';
import { Kind } from './Notification/enums';

export type NotificationOptions = Pick<NotificationDetails, 'position' | 'seconds'>;

export function useNotifier() {
  const setNotification = useContext(NotifierContext);

  if (setNotification === undefined) {
    throw new Error('useNotifier must be used within a NotifierProvider');
  }

  const showSuccessNotification = useCallback(
    (message: React.ReactChild, options?: NotificationOptions) => {
      setNotification!({ ...options, kind: Kind.Success, message });
    },
    [setNotification]
  );

  const showInfoNotification = useCallback(
    (message: React.ReactChild, options?: NotificationOptions) => {
      setNotification!({ ...options, kind: Kind.Info, message });
    },
    [setNotification]
  );

  const showWarningNotification = useCallback(
    (message: React.ReactChild, options?: NotificationOptions) => {
      setNotification!({ ...options, kind: Kind.Warning, message });
    },
    [setNotification]
  );

  const showErrorNotification = useCallback(
    (message: React.ReactChild, options?: NotificationOptions) => {
      setNotification!({ ...options, kind: Kind.Error, message });
    },
    [setNotification]
  );

  return {
    showSuccessNotification,
    showInfoNotification,
    showWarningNotification,
    showErrorNotification
  };
}
