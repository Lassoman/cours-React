import React from 'react';
import ReactDOM from 'react-dom';

// Créer un composant AddForm
// 	handleSubmit() -> appeler une props de App (comme ça c'est App qui va gérer l'action du submit) (annuler le comportement par défaut du formulaire (rechargement de page))
//     Mettre en place un formulaire avec un input type text et submit et capter l'évenement submit et appeler handleSubmit()

function AddForm(props) {

  function handleSubmit(e) { //
    e.preventDefault();// evite le rechargement de la page
    console.log('submit');
    const input = document.getElementById('input'); //ici on a mit l'input dans une variable pour la réutiliser
    props.onSubmit(input.value);//récupere la valeur de la const input et l'envoi a la propriété onSubmit

    // je réinitialise l'input à du vide (reset)
    input.value = "";
  }

  return (
    // des que le formulaire est soumit il va lancer la fonction handleSubmit
    <form onSubmit={handleSubmit}>
      {/* l'input a été placé dans une constante au dessus */}
      <input type="text" id="input" placeholder="Entrez une course" />
      <input type="submit" value="Ajouter" />
    </form>
  );

}

// Créer un composant Item
// 	Mettre en place un <li>
// 	<li> Item </li>

function Item(props) {

  function handleDoubleClick() {
    props.onDoubleClick();
  }

  return (
    <li onDoubleClick={handleDoubleClick} >{props.course}</li>
  );

}

// Créer un composant App (class)
// 	constructor
//     	mettre en place un state listItems
//         binder les méthodes handleDelete() et handleAdd() avec this
//     handleDelete() -> supprimer l'element du state listItems avec la méthode filter()
//     handleAdd() -> ajouter au state listItems le nouvel element
//     render()
//     	Afficher le composant AddForm
//     	Parcourir les éléments dans le state listItems avec la méthode map() et afficher pour chaque élément un composant Item
//       	condition ternaire si la liste 
//         	si elle est vide j'affiche un msg
//             sinon j'affiche les éléments de la liste

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { listItems: [{ id: 1, text: 'Carottes' }, { id: 2, text: 'Tomates' }] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.id = this.state.listItems.length + 1;
  }

  handleAdd(value) {
    this.setState({ listItems: [...this.state.listItems, { id: this.id, text: value }] });
    this.id++; // this.id = this.id + 1
  }

  handleDelete(id) {
    console.log(id);
    // Mettre à jour le state
    // supprimer l'élément de la liste listItems qui a l'id en argument de la fonction
    // filter()
  }

  render() {

    return (
      <>
      {/* la propriete apelle la fonction onsubmitt déclaré dans la fonction handlesubmitt en haut de page */}
        <AddForm onSubmit={this.handleAdd} />
        <ul>
          {
            this.state.listItems.length > 0
              ?
              this.state.listItems.map(
                (itemValue, index) => <Item onDoubleClick={(e) => this.handleDelete(itemValue.id)} key={itemValue.id} course={itemValue.text} />
              )
              : <p>Aucun élément dans la liste</p>
          }
        </ul>
      </>
    );

  }

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);