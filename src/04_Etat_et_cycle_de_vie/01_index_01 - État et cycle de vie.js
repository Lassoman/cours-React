import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 01 - État et cycle de vie

// Reprendre l'exercice sur l'horloge que l'on avait fait: Récupérable dans le dossier 02_le_rendu_des_éléments

function tick() {
  const element = (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);


// Etape 1 - Nous commençons par isoler l’apparence de l’horloge

function Clock(props) {
  return (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);


// le problème avec le code ci-dessus
// c'est que nous on aimerait que ce soit le composant Clock qui s'occupe de gérer l'horloge donc nous ce que l'on aimerait faire c'est juste ça au niveau du render :

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


// Pour ça on a donc deux solutions soit utiliser une classe
// soit une fonction mais pour cela on aura besoin des hooks