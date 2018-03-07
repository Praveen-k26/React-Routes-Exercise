import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Fourpointone from './Fourpointone';
import Home from './Home';
import NoMatch from './NoMatch';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
    <div>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/One" >One</Link></li>
            <li><Link to="/Two">Two</Link></li>
            <li><Link to="/Three">Three</Link></li>
            <li><Link to="/Four">Four</Link></li>
            

        </ul>

        <hr/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/One" component={One}/>
        <Route path="/Two" component={Two}/>
        <Route path="/Three" component={Three}/>
        <Route path="/Four" component={Four}>
          <Route path="/Four/:id" component={Fourpointone}/>
        </Route>
        <Route path=" * " exact={true} component={NoMatch}/>
        </Switch>
     
    </div>
    
    </Router>
      </div>
    );
  }
}

export default App;
