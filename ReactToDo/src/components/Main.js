import React, { Component } from 'react';
import _ from 'lodash';
import NavBar from './NavBar';
import ToDo from './ToDo';

export default class Main extends Component {

  render() {
    return(
      <div>
        <NavBar />
        <div className="row">
          <div> 
            <ToDo />
          </div>
        </div>
      </div>
    )
  }
}
