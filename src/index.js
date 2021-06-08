import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './app/App.js';
import reportWebVitals from './app/reportWebVitals';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();