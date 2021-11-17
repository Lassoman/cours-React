import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 04 - Spécifier des attributs en JSX

// Vous pouvez utiliser des guillemets pour spécifier des littéraux chaînes de caractères dans les attribut
const element = <div tabIndex="0"></div>;

// Vous pouvez aussi utiliser des accolades pour utiliser une expression JavaScript dans un attribut
const element = <img src={user.avatarUrl}></img>;


ReactDOM.render(
  element,
  document.getElementById('root')
);


reportWebVitals();
