import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


// 03 - Utiliser des expressions dans JSX - part 2

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Samih',
  lastName: 'Habbani'
};

const element = (
  <h1>
    Hello, {formatName(user)} !
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);


reportWebVitals();
