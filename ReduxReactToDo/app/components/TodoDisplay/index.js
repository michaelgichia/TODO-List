/**
*
* TodoDisplay
*
*/

import React from 'react';
// import styled from 'styled-components';
import Ul from './Ul';
import Li from './Li';
import Checkbox from './Checkbox';
import Label from './Label';


class TodoDisplay extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Ul>
	      <Li><Checkbox type="checkbox"/><Label>To do List</Label></Li>
	      <Li><Checkbox type="checkbox"/><Label>To do List</Label></Li>
	      <Li><Checkbox type="checkbox"/><Label>To do List</Label></Li>
      </Ul>
    );
  }
}

TodoDisplay.propTypes = {

};

export default TodoDisplay;
