import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


// 01 - explication de la syntaxe

// ni une chaine de caractère ni du HTML
// -> JSX (extension synthaxique de Javascript)
// -> utiliser en Javascript pour créer des UI's
// JSX produit des « éléments » React

// Pourquoi JSX
// Le fonctionnement d’une UI conditionnera toujours les logiques de rendu,
// de la gestion des événements à la préparation des données pour l’affichage,
// en passant par l’évolution de l’état au fil du temps. React a choisi d’assumer pleinement cet état de fait.

// React ne sépare plus les technologies en mettant le balisage et la logique dans des fichiers séparés
// mais préfère séparer son applicatiion en composant

const element = <h1>Hello, World !</h1>;

ReactDOM.render(
  <React.StrictMode>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
