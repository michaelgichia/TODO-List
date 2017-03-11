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
	constructor(props) {
		super(props)
	}

	renderTodos(){
		return (this.props.todos.map((todo, index) => (
			<Li key={index}>
				<Checkbox
					onChange={() => this.props.completeTodo(todo.id)}
					defaultChecked={todo.isCompleted ? "checked":""}
					type="checkbox"/>
				<Label>{todo.content}</Label>
			</Li>
		)))
	}

	
  render() {
    return (
      <Ul>
      	{this.renderTodos()}
      </Ul>
    );
  }
}

TodoDisplay.propTypes = {

};

export default TodoDisplay;
