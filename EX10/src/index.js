import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 確保有這一行來讀取 App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);