import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class App extends React.Component {  

// render() {
//   return (   
//     <div>
//         <h1>Voici ma liste de courses</h1>   
//           <form>
//             <input type="text" placeholder="Veuillez rentrer une course" />
//           </form>
//             <form>
//                 <button>Ajouter</button>
//             </form>
        
//         <ul>
//           <li>Oeufs</li>
//           <li>Fromage</li>
//           <li>Brocoli</li>
//           <li>Petit poids</li>
//           <li>Slata mechouia</li>
//           <li>Kellogs</li>
//           <li>Tortilla patata</li>
//         </ul>  
  
//       </div>
//   )
// }

// }

// ReactDOM.render(
//   <App />,                          // Ici je demande à faire le rendu de mon composant App
//   document.getElementById('root')
// );

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <p>Let's make a todo list with React!</p>
      </div>
    );
  }
}