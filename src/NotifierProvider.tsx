import React, { createContext, PropsWithChildren, useState } from 'react';

import { Notification, NotificationProps } from './Notification';

export type NotificationDetails = Omit<NotificationProps, 'onClose'>;

export const NotifierContext = createContext<React.Dispatch<React.SetStateAction<NotificationDetails | undefined>> | undefined>(undefined);

export function NotifierProvider({ children }: PropsWithChildren<{}>) {
  const [notification, setNotification] = useState<NotificationDetails>();

  return (
    <NotifierContext.Provider value={setNotification}>
      {children}
      {notification && <Notification {...notification} onClose={() => setNotification(undefined)} />}
    </NotifierContext.Provider>
  );
}
