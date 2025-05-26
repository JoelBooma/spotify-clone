import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  // Load initial state from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (storedToken) setToken(storedToken);
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const loginUser = (token, username) => {
    setToken(token);
    setUsername(username);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  const logoutUser = () => {
    setToken("");
    setUsername("");
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ token, username, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
