// Works the same as require, it's just nicer syntax
// You may use import syntax if your project is a module
// This project is a module thanks to a tool called webpack
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// const { SomeComponent: SomeComponent2, x } = require('./SomeComponent');
import SomeComponent, { SomeComponent as SomeComponent2, x } from './SomeComponent'; // .js or .jsx is optional
// The CSS will apply at this level of tree and everything below it
// import './index.css'; // Special syntax for React. You can import CSS files to have them apply to your app
// import App from './App';

// This file, index, is in charge of mounting the app and setting up any other providers (auth, data stores)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
    // {/* <App /> */}
  // </React.StrictMode>
);
