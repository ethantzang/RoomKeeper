import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAJIFw4UGoaJQkONe1hOGh-DBN04KI2l_s",
  authDomain: "blinding-torch-957.firebaseapp.com",
  databaseURL: "https://blinding-torch-957.firebaseio.com",
  storageBucket: "blinding-torch-957.appspot.com",
  messagingSenderId: "50701028887"
}

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
