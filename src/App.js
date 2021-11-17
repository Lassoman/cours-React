import React from 'react'
import TodoList from './TodoList';


class App extends React.Component {

  // Le constructeur d’un composant React est appelé avant que celui-ci soit monté.
  // Quand on implémente le constructeur d’une sous-classe de React.Component,
  // il faut commencer par appeler super(props), avant toute manipulation de this.
  constructor(props) {

    // En JavaScript, super fait référence au constructeur de la classe parente.
    // (Dans notre exemple, ça pointe sur l’implémentation de React.Component.)
    // vous ne pouvez utiliser this dans un constructeur qu’après avoir appelé le constructeur parent
    super(props);

    // le constructeur est le seul endroit où on devrait affecter directement une valeur à this.state
    // dans les autres méthodes il faudra utiliser this.setState()

    // RQ : ne pas utiliser les props dans le state
    // c'est superflu
    // ça créé des bugs
    // -> on fait ça que quand on a l'intention d'ignorer les mise à jour de la props
    this.state = { items: [], text: '' };
    // Bind creates a new function that will force the this inside
    // the function to be the parameter passed to bind()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // La méthode render() est la seule méthode requise dans une classe de composant.
  render() {
    // Lorsqu’elle est appelée, elle examine en général this.props et this.state et renvoie un des types suivants :
    // Éléments React. Typiquement créés via JSX.
    // Tableaux et fragments.
    // Portails.
    // Chaînes de caractères et nombres.
    // Booléens ou null.
    return (
      <div>
        <h3>À faire</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Que faut-il faire ?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Ajouter #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  // méthodes
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    // La méthode concat() est utilisée afin de fusionner un ou plusieurs tableaux
    // en les concaténant. Cette méthode ne modifie pas les tableaux existants,
    // elle renvoie un nouveau tableau qui est le résultat de l'opération.

    // important cette notion de renvoyer un nouveau tableau car les objets sont immuables
    // en ReactJs, on ne modifie pas la valeur du state, on lui réattribut une valeur
    this.setState(state => ({

      // setState() planifie des modifications à l’état local du composant,
      // et indique à React que ce composant et ses enfants ont besoin d’être rafraîchis une fois l’état mis à jour.

      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default App

