import React from 'react';
import ReactDOM from 'react-dom';
import {JssProvider} from 'react-jss'
import App from './App';


const generateId = (rule, sheet) => `vindi-${rule.key}-${Math.floor(Math.random() * 5000)}`

ReactDOM.render(
  <JssProvider generateId={generateId}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </JssProvider>,
  document.getElementById('root')
);
