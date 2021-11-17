import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Message(){
  return(
    <>
    <h1>Bonjour !</h1>
    <p>Vous avez x messages</p>
    </>
  )
}

const messages = ['Salut man', 'sympa ton code React JS', 'plus d\'inspi'];

ReactDOM.render(
  <React.StrictMode>
    <message unreadMessages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);