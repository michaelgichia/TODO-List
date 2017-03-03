import React from 'react';
import NavBar from './components/NavBar';
import ToDo from './containers/ToDo';

export default () => {
  return (
    <div>
      <NavBar />
      <div className="row">
        <ToDo />
      </div>
    </div>
  )
}
