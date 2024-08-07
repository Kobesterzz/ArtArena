import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './css/CreateAccountForm.css';

const CreateAccountForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createAccount } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      createAccount(username, password);
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="create-account-form">
    <h2>Create Account</h2>
    {error && <p className="error">{error}</p>}
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Create Account</button>
      <p>
      Already have an account? <button onClick={switchToLogin}>Login</button>
    </p>
    </form>
  </div>
  );
};

export default CreateAccountForm;
