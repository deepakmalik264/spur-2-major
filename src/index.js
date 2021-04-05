import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA67S_62e4VkydFWTifUUJhGPNvnl2Jq0E",
  authDomain: "spur-b1135.firebaseapp.com",
  projectId: "spur-b1135",
  storageBucket: "spur-b1135.appspot.com",
  messagingSenderId: "302338040343",
  appId: "1:302338040343:web:66ed284b731e7a3baeb252",
  measurementId: "G-V5S37J4F56",
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
