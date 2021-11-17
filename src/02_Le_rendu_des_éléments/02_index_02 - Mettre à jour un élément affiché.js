import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 02 - Mettre à jour un élément affiché
// Exercice
// Afficher l'heure actuelle avec les secondes

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
