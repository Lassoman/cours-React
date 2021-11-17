import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 04 - Extraire des composants

// On peut scinder des composants en composants plus petits.

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// LE composant ci-dessus est difficilement maintenable du coup on pourrait le découper en plusieurs composant
// par exemple la partie Avatar on pourrait la séparer et cela donnerait le composant ci-dessous :

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}


// du coup Comment deviendrait : 

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


// Exerice : décomposer le reste des sous composants demander à la classe d'essayer de le faire
// donner un exo à la classe


// 03 - Extraire des composants

function Author(props) {
  return (
    <div className="Author-info">
      <img className="avatar" src={props.img} alt={props.description}/>
      <div className="author-name">{props.name}</div>
    </div>
    );
}

function Text(props) {
  return (
    <>
      <div className="comment-info"> {props.text} </div>
    </>
  )
}

function Date(props) {

  function formatDate(date) {
    return 'Nous somme ' + date;
  }

  return (
    <>
      <div className="comment-date"> {formatDate(props.date)} </div>
    </>
  )
}

function Comment(props) {

  return (
    <div className="Comment">
        {/* AUTHOR */}
        <Author description="super autheur"
                name="Quentin Vilbord"
                img="https://hospitality-on.com/sites/default/files/styles/image994x499/public/2018-01/oussama_ammar.jpeg?h=5dcbbd49&itok=zasyw5Za"/>

        {/* Comment */}
        <Text text="Ceci est mon texte !"/>
        
        {/* Date */}
        <Date date="15 Novembre 2021"/>
        
    </div>
  );
}

// Le composant ci-dessus est difficilement maintenable
// donc on pourrait le découper en plusieurs composants


ReactDOM.render(
  <Comment />,
  document.getElementById('root')
);

// Que vous déclariez un composant sous forme de fonction ou de classe, il ne doit jamais modifier ses propres props.

function sum(a, b) {
  return a + b;
}

// la fonction du dessus est pure car elle ne modifie pas ses entrées

function sum(a, b) {
  a.value -= b;
}

// la fonction du dessus est impure car elle  modifie  ses entrées

// n'oubliez donc jamais la règle suivante :
// Tout composant React doit agir comme une fonction pure vis-à-vis de ses props.




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);