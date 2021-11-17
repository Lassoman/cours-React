import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 03 - Ajouter des méthodes de cycle de vie à une classe

// ce que l'on veut :

//  mettre en place un minuteur quand une Horloge apparaît dans le DOM pour la première fois -> phase de montage
//  nettoyer le minuteur quand le DOM produit par l’Horloge est supprimé -> phase de démontage

class Clock extends React.Component {

  // Si vous n’initialisez pas d’état local et ne liez pas de méthodes, vous n’avez pas besoin d’implémenter votre propre constructeur pour votre composant React.

  // En JavaScript, super fait référence au constructeur de la classe parente.
  // (Dans notre exemple, ça pointe sur l’implémentation de React.Component.)
  // vous ne pouvez utiliser this dans un constructeur qu’après avoir appelé le constructeur parent
  constructor(props) {
    super(props);

    // le constructeur est le seul endroit où on devrait affecter directement une valeur à this.state
    // dans les autres méthodes il faudra utiliser this.setState()
    this.state = { date: new Date() };

      // RQ : ne pas utiliser les props dans le state
      // c'est superflu
      // ça créé des bugs
      // -> on fait ça que quand on a l'intention d'ignorer les mise à jour de la props

  }

  // La méthode componentDidMount() est exécutée après que la sortie du composant a été injectée dans le DOM.
  // C’est un bon endroit pour mettre en place le minuteur :
  componentDidMount() {

    //  ajouter manuellement d’autres champs sur la classe si vous avez besoin de stocker quelque chose qui ne participe pas au flux de données (comme un ID de minuteur)
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // componentWillUnmount() est appelée immédiatement avant qu’un composant soit démonté ou détruit
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World !</h1>
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


// Résumé

// 1 - Quand <Clock /> est passé à ReactDOM.render(), React appelle le constructeur du composant Clock.
//  il initialise this.state avec un objet contenant l’heure actuelle mise à jour par la suite

// 2 - React appelle ensuite la méthode render() du composant Clock pour savoir ce qu'il faut afficher à l'écran

// 3 - Quand la sortie du composant Clock est inséré dans le DOM, React appel la méthode de cycle de vie componentDidMount()
// qui appel la fonction tick() chaque seconde pour mettre en place un minuteur

// 4 - Chaque seconde le navigateur appelle la méthode tick() qui met à jour l'état du composant en appelant la méthode setState()
// React sait en faisant que l'état à changé donc il appel à nouveau la méthode render(), comme la valeur de this.state.date
// est différente il affiche une nouvelle heure chaque seconde

// 5 - Si le composant Clock fini par être retiré du DOM, il appelera la méthode componentWillUnmount()



/// Exercice suivant essayer de faire la même chose avec une fonction en utilisant les hooks