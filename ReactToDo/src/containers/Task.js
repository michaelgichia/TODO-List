import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Label from '../components/Label';

export default class Task extends Component {

  toggleAll = () => {
    const {todos} = this.props;
    let activeTodos = this.activeTodos(todos);
    let completedTodos = this.completedTodos(todos);
    const newTodos = this.newTodos(todos, activeTodos, completedTodos)
    this.props.updateState(newTodos)
  }

  activeTodos = (todos) => {
    return todos.filter(todo => !todo.isCompleted);
  }

  completedTodos = (todos) => {
    return todos.filter(todo => !!todo.isCompleted);
  }

  newTodos = (todos, activeTodos, completedTodos) => {
    if(completedTodos.length > 0) {
      return todos.map(todo => Object.assign({}, todo, {isCompleted: false}))
    } else if(activeTodos.length > 0) {
      return todos.map(todo => Object.assign({}, todo, {isCompleted: true}))
    } else {
      return todos.map(todo => Object.assign({}, todo, {isCompleted: !todo.isCompleted}))
    }
  }

	render () {
		return (
			<div className="task">
			  <Label id="all-todo" onClick={this.props.displayAllTodos}>All</Label>
			  <Label id="toggle-all" onClick={this.toggleAll}>Toggle</Label>
			  <Label id="active-todo" onClick={this.props.displayActiveTodos}>Active</Label>
			  <Label id="complete-todo" onClick={this.props.displayCompletedTodos}>Completed</Label>
			</div>
		);

	}
}

Task.propTypes = {
  todos: PropTypes.array,
  displayAllTodos: PropTypes.func,
  toggleAll: PropTypes.func,
  displayActiveTodos: PropTypes.func,
  displayCompletedTodos: PropTypes.func,
  updateState: PropTypes.func
};

