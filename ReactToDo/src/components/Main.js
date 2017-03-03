import React from 'react';
import _ from 'lodash';
import NavBar from './NavBar';
import ToDo from './ToDo';

export default () => {
  return (
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
