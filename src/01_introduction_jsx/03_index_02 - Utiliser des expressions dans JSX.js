import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


// 02 - Utiliser des expressions dans JSX

const name = 'Samih Habbani';
const element = <h1>Hello, {name}</h1>;

// Vous pouvez utiliser n’importe quelle expression JavaScript valide dans des accolades en JSX.
// 2 + 2, user.firstName, ou formatName(user)

ReactDOM.render(
  element,
  document.getElementById('root')
);


reportWebVitals();
