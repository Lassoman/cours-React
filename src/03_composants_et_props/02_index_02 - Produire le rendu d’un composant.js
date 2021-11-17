import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 02 - Produire le rendu d’un composant

// on a :

// des éléments React représentant des balises DOM :
const element = <div />;

// des composants définis par l’utilisateur :
const element = <Welcome name="Sara" />;

// PROPS

// Lorsque React rencontre un élément représentant un composant défini par l’utilisateur,
// il transmet les attributs JSX et les enfants à ce composant sous la forme d’un objet unique.
// Nous appelons cet objet « props ».

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Samih" />;


// ce code affichera Hello Samih

ReactDOM.render(
  element,
  document.getElementById('root')
);