import React, { Component } from 'react';
import _ from 'lodash';
import TodoInput from './TodoInput';
import DisplayToDos from './DisplayToDos';
import Task from './Task';

export default class ToDo extends Component {
	constructor(props){
    super(props)
    this.state = {
      todos: [
        {content: "Learn Redux in Depth", isCompleted: true},
        {content: "Learn Redux Saga in Depth", isCompleted: false},
        {content: "Learn Redux Redux-Form in Depth", isCompleted: false}
      ],
      term: '',
      active: false,
      complete: false
    }
    this.createTodo = this.createTodo.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.renderTodos = this.renderTodos.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateTodos = this.updateTodos.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
    this.activeTodos = this.activeTodos.bind(this)
    this.completedTodos = this.completedTodos.bind(this)
    this.newTodos = this.newTodos.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
    this.displayActiveTodos = this.displayActiveTodos.bind(this)
    this.displayCompletedTodos = this.displayCompletedTodos.bind(this)
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  createTodo(value) {
    let todos = _.concat(this.state.todos, { content: value, isCompleted: false})
    this.setState({todos})
  }

  handelSubmit(event) {
    event.preventDefault();
    if(this.refs.inputValue.props.value.length < 5) {return}
    const value = this.refs.inputValue.props.value
    this.createTodo(value)
    this.setState({term: ""})
  }

  deleteTodo(done) {
    const {todos} = this.state
  	_.remove(todos, todo => todo === done )
    this.setState({todos})
  }

  updateTodos(newContent, oldContent) {
  	const {todos} = this.state
  	const oldTodoObj = _.find(todos, todo => todo.content === oldContent)
  	oldTodoObj.content = newContent
  	this.setState({todos})
  }

  updateCheckbox(oldCheckboxVal) {
    const {todos} = this.state
    const newValue = _.find(todos, todo => todo.content === oldCheckboxVal.content)
    newValue.isCompleted = !newValue.isCompleted;
    this.setState({todos});
  }

  activeTodos(todos) {
    return todos.filter(todo => !todo.isCompleted);
  }

  completedTodos(todos) {
    return todos.filter(todo => !!todo.isCompleted);
  }

  newTodos(todos, activeTodos, completedTodos) {
    if(completedTodos.length > 0) {
      return todos.map(todo => Object.assign({}, todo, {isCompleted: false}))
    } else if(activeTodos.length > 0) {
      return todos.map(todo => Object.assign({}, todo, {isCompleted: true}))
    } else {
      return todos.map(todo => Object.assign({}, todo, {isCompleted: !todo.isCompleted}))
    }
  }

  toggleAll() {
    const {todos} = this.state;
    let activeTodos = this.activeTodos(todos);
    let completedTodos = this.completedTodos(todos);
    const newTodos = this.newTodos(todos, activeTodos, completedTodos)
    this.setState({todos: newTodos})
  }

  displayActiveTodos() {
    this.setState({active: true, complete: false})
  }

  displayCompletedTodos() {
    this.setState({active: false, complete: true})
  }

  renderTodos() {
    const {todos, active, complete} = this.state;
    let todoItems;
    if(active) {
      todoItems = _.filter(todos, todo => todo.isCompleted === false);
    } else if(complete) {
      todoItems = _.filter(todos, todo => todo.isCompleted === true);
    } else {
      todoItems = todos;
    }
  	return(_.map(todoItems, (todo, index) => (
  		<DisplayToDos
				key={index}
        {...this.state}
				{...todo}
				{...this.updateTodos}
        id={index}
        HtmlFor={index}
				onDelete={() => this.deleteTodo(todo)}
				updateTodos={this.updateTodos}
        updateCheckbox={this.updateCheckbox}
			/>
		)))
  }

  render() {
    return(
      <div>
        <div className="title col l6 m8 s12 offset-l3 offset-m2">
          <p>To~Do</p>
        </div>
        <div className="col l6 m8 s12 offset-l3 offset-m2">
          <TodoInput
            createTodo={this.createTodo}
            onSubmit={this.handelSubmit}
            ref="inputValue"
            onChange={this.onInputChange}
            value={this.state.term}/>
          <Task
            {...this.state}
            toggleAll={this.toggleAll}
            displayActiveTodos={this.displayActiveTodos}
            displayCompletedTodos={this.displayCompletedTodos}
          /> 
        </div>
          <div className="col l6 m8 s12 offset-l3 offset-m2">
            <ul>
            	{this.renderTodos()}
            </ul>
          </div>
      </div>
    )
  }
}
