import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate('/home');  // Redirect to home if user is logged in
    }
  }, [navigate]);

  const createAccount = (username, password) => {
    const newUser = { username, password, id: Date.now() };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/home');  // Navigate to home after account creation
  };

  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setUser(storedUser);
      navigate('/home');  // Navigate to home after login
    } else {
      console.error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/landing');  // Navigate to landing page after logout
  };

  return (
    <AuthContext.Provider value={{ user, createAccount, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

