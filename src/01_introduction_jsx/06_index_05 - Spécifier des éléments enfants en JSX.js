import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 05 - Spécifier des éléments enfants en JSX

// A - Si une balise est vide, vous pouvez la fermer immédiatement avec />, comme en XML :
const element = <img src={user.avatarUrl} />;

// B  - Les balises JSX peuvent contenir des enfants :

const element = (
  <div>
    <h1>Bonjour !</h1>
    <h2>Content de te voir ici.</h2>
  </div>
);

// C - JSX empêche les attaques d’injection
const title = response.potentiallyMaliciousInput;
// Ceci est sans risque :
const element = <h1>{title}</h1>;

// React DOM échappe toutes les valeurs intégrées avec JSX avant d’en faire le rendu.
// Il garantit ainsi que vous ne risquez jamais d’injecter quoi que ce soit d’autre que ce vous avez explicitement écrit dans votre application.
// Tout est converti en chaîne de caractères avant de produire le rendu. Ça aide à éviter les attaques XSS (cross-site-scripting).




ReactDOM.render(
  element,
  document.getElementById('root')
);


reportWebVitals();
