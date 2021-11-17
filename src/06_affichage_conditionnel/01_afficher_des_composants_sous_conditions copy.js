import React from 'react';
import ReactDOM from 'react-dom';

// 01 - Afficher des composants sous conditions

function Welcome(props) {
  return <h1>Welcome !</h1>;
}

function Registration(props) {
  return <h1>Veuillez vous inscrire !</h1>;
}

function Greeting(props) {
  // si je suis déjà inscris j'affiche le composant Welcome
  // sinon j'affiche le composant Registration
  //une propriété peux etre variabilisée
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Welcome />;
  }
  return <Registration />;
}


ReactDOM.render(
  <Greeting isLoggedIn/>,
  document.getElementById('root')
);