import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);

// Multiple dummy user data for demonstration purposes
const DUMMY_USERS = [
  {
    username: "testuser",
    password: "testuser"
  },
  {
    username: "admin",
    password: "admin"
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    // Check against the list of users
    const foundUser = DUMMY_USERS.find(u => u.username === username && u.password === password);
    if (foundUser) {
      setUser({ username });  // Log the user in with their username
    } else {
      alert("Invalid username or password");
      setUser(null);  // Ensure user is not set if credentials are wrong
    }
  };

  const logout = () => {
    setUser(null);  // Mock logout function
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
