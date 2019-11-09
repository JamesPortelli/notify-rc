import React, { useContext } from 'react';

import { NotifierContext, NotificationDetails } from './NotifierProvider';
import { Kind } from './Notification/enums';

export type NotificationOptions = Pick<NotificationDetails, 'position' | 'seconds'>;

export function useNotifier() {
  const setNotification = useContext(NotifierContext);

  if (setNotification === undefined) {
    throw new Error('useNotifier must be used within a NotifierProvider');
  }

  function showSuccessNotification(message: React.ReactChild, options?: NotificationOptions) {
    setNotification!({ ...options, kind: Kind.Success, message });
  }

  function showInfoNotification(message: React.ReactChild, options?: NotificationOptions) {
    setNotification!({ ...options, kind: Kind.Info, message });
  }

  function showWarningNotification(message: React.ReactChild, options?: NotificationOptions) {
    setNotification!({ ...options, kind: Kind.Warning, message });
  }

  function showErrorNotification(message: React.ReactChild, options?: NotificationOptions) {
    setNotification!({ ...options, kind: Kind.Error, message });
  }

  return {
    showSuccessNotification,
    showInfoNotification,
    showWarningNotification,
    showErrorNotification
  };
}
