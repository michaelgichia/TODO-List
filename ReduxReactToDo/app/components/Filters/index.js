import React from 'react';
import Tasks from './Tasks';
import Label from './Label';

class Filters extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Tasks>
		    <Label>All</Label>
		    <Label>Toggle</Label>
		    <Label>Active</Label>
		    <Label>Completed</Label>
      </Tasks>
    );
  }
}

Filters.propTypes = {

};

export default Filters;
