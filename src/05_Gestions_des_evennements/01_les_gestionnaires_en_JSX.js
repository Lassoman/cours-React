import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './App.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

   
    this.handleClick = this.handleClick.bind(this);//permet de lier le "this" de la méthode handle click au this de la classe et donc de pouvoir l'utiliser partout
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);