import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

class Four extends Component{
    render(){
        return(
            <div>
                <h1> This is a Four Component</h1>
                <ul>
                    <li><Link to="/Fourpointone">Fourpointone</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}


export default Four;