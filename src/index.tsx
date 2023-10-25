import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { initializeApp } from "firebase/app";

import '@fontsource/dela-gothic-one';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource-variable/heebo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyBz8JYsdH2P6vEus45jFnPHTwEIZpg7_dU",
  authDomain: "ifcjs-frontend-tutorial-cceb5.firebaseapp.com",
  projectId: "ifcjs-frontend-tutorial-cceb5",
  storageBucket: "ifcjs-frontend-tutorial-cceb5.appspot.com",
  messagingSenderId: "156573211579",
  appId: "1:156573211579:web:656e4161642b61ebadc29e"
};

const app = initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
