// Works the same as require, it's just nicer syntax
// You may use import syntax if your project is a module
// This project is a module thanks to a tool called webpack
import React from 'react';
import ReactDOM from 'react-dom/client';
// The CSS will apply at this level of tree and everything below it
import './index.css'; // Special syntax for React. You can import CSS files to have them apply to your app
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
