import React from 'react';
import Tasks from './Tasks';
import Label from './Label';

class Filters extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tasks>
        <Label id="all-todo">All</Label>
        <Label id="toggle-all">Toggle</Label>
        <Label id="active-todo">Active</Label>
        <Label id="complete-todo">Completed</Label>
      </Tasks>
    );
  }
}

Filters.propTypes = {

};

export default Filters;
