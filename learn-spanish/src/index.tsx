import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './utils/userContext';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
