import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Creer les composants suivants : 
// Welcome
// Connexion
// Greeting (qui affiche connecte toi ou bienvenu)
// LoginButton
// LogoutButton
// LoginPage

// De base quand le composant est chargé
// j'affiche le msg Veuillez vous connecter.
// et le boutton connexion

// Si je clique sur le boutton de connexion
// j'affiche le msg Welcome.
// et le boutton deconnexion

// Si je clique sur le boutton de deconnexion
// j'affiche le msg Veuillez vous connecter.
// et le boutton connexion

// 01 - Afficher des composants sous conditions

function UserGreeting(props) {
  return <h1>Welcome !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous connecter.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Essayez de changer ça vers isLoggedIn={true} :
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);


// 2EME ETAPE (creation du bouton(connexion) via  1 Composant)
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Connexion
    </button>
  );
}

// (creation du bouton(déconnexion) via 1 Composant)
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Déconnexion
    </button>
  );
}




// CLASSE POUR GERER LES ETATS
//Notre composant final est LoginControl car ici on crée le composant à partir d'une classe

class LoginControl extends React.Component {
  constructor(props) {
    // APPEL AU CONTRUCTOR
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  //méthode pour changer l'état de l'objet du constructeur à TRUE
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  //méthode pour changer l'état de l'objet du constructeur à FALSE
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  //Un Composant dans une classe renvoir TOUJOURS un rendu. Comme une fonction qui va déclencher le return a afficher dans le DOM
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
   <LoginControl />
  </React.StrictMode>,
  document.getElementById('root')
);

