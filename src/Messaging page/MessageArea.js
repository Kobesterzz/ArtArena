import React from 'react';
import './MessageArea.css';

function MessageArea({ messages }) {
  return (
    <div className="message-area">
      {messages ? (
        messages.map(message => (
          <div key={message.id} className="message-item">
            {message.text}
          </div>
        ))
      ) : (
        <div className="no-messages">Select an account to view messages</div>
      )}
    </div>
  );
}

export default MessageArea;
