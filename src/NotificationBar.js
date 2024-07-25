// NotificationBar.js
import React from 'react';
import './css/NotificationBar.css';

function NotificationBar({ notifications, closeNotificationBar }) {
  return (
    <div className="notification-bar">
      <button className="close-button" onClick={closeNotificationBar}>×</button>
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
}

export default NotificationBar;
