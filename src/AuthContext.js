import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const login = (username, password) => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };
  const createAccount = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, createAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

