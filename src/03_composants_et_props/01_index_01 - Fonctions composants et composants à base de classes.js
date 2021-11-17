import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 01 - Fonctions composants et composants à base de classes
// Les composants vous permettent de découper l’interface utilisateur en éléments indépendants et réutilisables,
// vous permettant ainsi de considérer chaque élément de manière isolée.

function Welcome(props) {
  return <h1>Bonjour {props.name}</h1>;
}

// Cette fonction est un composant React valide car elle accepte un seul argument « props »
// (qui signifie « propriétés ») contenant des données, et renvoie un élément React.
// Nous appelons de tels composants des « fonctions composants », car ce sont littéralement des fonctions JavaScript.


// Vous pouvez également utiliser une classe ES6 pour définir un composant :

class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

// Les deux composants ci-dessus sont équivalents du point de vue de React.

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);