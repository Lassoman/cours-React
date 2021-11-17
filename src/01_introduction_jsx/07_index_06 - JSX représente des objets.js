import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 06 - JSX représente des objets

// Babel compile JSX vers des appels à React.createElement().

// Ces deux exemples sont identiques :

const element = (
  <h1 className="greeting">
    Bonjour, monde !
  </h1>
);

// ou

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Bonjour, monde !'
);

// React.createElement() effectue quelques vérifications pour vous aider à écrire un code sans bug,
// mais pour l’essentiel il crée un objet qui ressemble à ceci

// Remarque : cette structure est simplifiée
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Bonjour, monde !'
  }
};

// Ces objets sont appelés des « éléments React ».
// Vous pouvez les considérer comme des descriptions de ce que vous voulez voir sur l’écran.
// React lit ces objets et les utilise pour construire le DOM et le tenir à jour.

ReactDOM.render(
  element,
  document.getElementById('root')
);


reportWebVitals();
