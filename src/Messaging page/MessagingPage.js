import React, { useState } from 'react';
import './MessagingPage.css';

function MessagingPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const users = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    // Add more users here
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Fetch messages for the selected user
    // This is a placeholder, you should replace it with actual fetching logic
    setMessages([
      { id: 1, text: 'Hello!', from: 'me' },
      { id: 2, text: 'Hi there!', from: user.username },
    ]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: Date.now(), text: newMessage, from: 'me' }]);
    setNewMessage('');
  };

  return (
    <div className="messaging-page">
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user" onClick={() => handleUserClick(user)}>
            {user.username}
          </div>
        ))}
      </div>
      <div className="message-area">
        {selectedUser ? (
          <>
            <div className="messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.from === 'me' ? 'sent' : 'received'}`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="select-user">Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
}

export default MessagingPage;
