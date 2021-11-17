import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 01 - Afficher un élément dans le DOM

// explication

// Imaginez que vous avez un élément une balise div quelque part dans votre page HTML
// qui a l'id root: <div id="root"></div>
// -> Nous parlons de nœud DOM « racine » car tout ce qu’il contient sera géré par React DOM.

// Pour faire le rendu d’un élément React dans un nœud DOM racine, passez les deux à la méthode ReactDOM.render() :

ReactDOM.render(
  element,
  document.getElementById('root')
);


reportWebVitals();
