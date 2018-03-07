import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
