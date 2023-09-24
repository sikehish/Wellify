import React, { useEffect } from 'react';
import { getToken } from 'firebase/messaging';
import { messaging } from './firebase/firebase';

const NotificationButton = () => {
    const requestNotificationPermission = async () => {
        try {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            console.log('Notification permission granted.');
            const token = await getToken(messaging, {
              vapidKey: import.meta.env.VITE_GCM_KEY,
            });
            
            console.log('FCM Token:', token);
          } else {
            console.log('Notification permission denied.');
          }
        } catch (error) {
          console.error('Error requesting notification permission:', error);
        }
      };
      

  return (
    <div>
      <button className='text-xs text-secondary'  onClick={() => requestNotificationPermission()}>Request Notification Permission</button>

    </div>
  );
};

export default NotificationButton;
