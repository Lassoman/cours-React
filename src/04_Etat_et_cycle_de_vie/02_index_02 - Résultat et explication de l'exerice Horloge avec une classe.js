import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 02 - Résultat et explication de l'exerice Horloge avec une classe

// Créez une classe ES6, avec le même nom, qui étend React.Component.
// Ajoutez-y une méthode vide appelée render().
// Déplacez le corps de la fonction dans la méthode render().
// Remplacez props par this.props dans le corps de la méthode render().
// Supprimez la déclaration désormais vide de la fonction.

//composant crée avec une classe. le "this" fait référence à 
//on a
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.props.date.toLocaleTimeString()}.</h2> /
      </div>
    );
  }
}

///
/// Ajouter un état local à une classe
///

// Remplacez this.props.date avec this.state.date dans la méthode render() :
// Ajoutez un constructeur de classe qui initialise this.state:

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// Supprimez la prop date de l’élément <Clock /> :

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);



//// Le problème ici c'est qu'on à l'heure à un instant T
// regardons comment mettre en place le système de minuterie dans la classe