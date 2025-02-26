// File Name: index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*

// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render "Hello World!" to the root
root.render(
  <React.StrictMode>
    <h1>Hello World!</h1>
  </React.StrictMode>
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
