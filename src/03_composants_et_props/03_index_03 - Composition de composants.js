import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 03 - Composition de composants

// Les composants peuvent faire référence à d’autres composants dans leur sortie.
// Ça nous permet d’utiliser la même abstraction de composants pour n’importe quel niveau de détail.
// Un bouton, un formulaire, une boîte de dialogue, un écran : dans React, ils sont généralement tous exprimés par des composants.

function Welcome(props) {
  return <h1>Bonjour {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




//composant
function commentaire(props) {
  return <div className="comment">Hello, {props.comment}</div>;
}
//composant
function auteur(props) {
  return <div className="author">Hello, {props.author}</div>;
}

//fonction pour formater la date
function formatDate(date) {
  return date.toLocaleString();
}

//composant
function dateAut(props) {
  return <div className="date">{formatDate(props.date)}</div>;
}

function App() {
  return <div>
            <commentaire comment="bonjour"   />
            <auteur author="lasso"  />       
              
        </div>
  
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
