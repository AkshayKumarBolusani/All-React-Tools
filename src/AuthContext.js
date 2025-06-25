import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);

// Example user data for demonstration purposes
const DUMMY_USER = {
  username: "testuser",
  password: "testuser"
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    console.log("Login Attempt:", username, password);  // Debug the input values
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
        console.log("Login successful");
    setUser({ username });

      setUser({ username });  // Log the user in with their username
    } else {
      alert("Invalid username or password");
      setUser(null);  // Ensure user is not set if credentials are wrong
    }
  };

  const logout = () => {
    setUser(null);  // Mock logout function
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
