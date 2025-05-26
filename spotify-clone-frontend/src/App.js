import React from 'react';
import { useContext } from "react";
import { AuthContext } from './AuthContext';
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css"; // Create this for basic styling

function App() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      {token ? <Home /> : <Login />}
    </div>
  );
}

export default App;
