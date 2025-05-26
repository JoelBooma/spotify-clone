import React from 'react';
import ReactDOM from 'react-dom/client'; // 🚀 Use this in React 18+
import App from './App';
import { AuthProvider } from './AuthContext'; // 👈 Wrap your App with context (if using one)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider> {/* Provide context to your App */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
