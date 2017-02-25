import React, { Component } from 'react';
import _ from 'lodash';
import TodoInput from './TodoInput';
import DisplayToDos from './DisplayToDos';

export default class ToDo extends Component {
	constructor(props){
    super(props)
    this.state = {
      todos: [
        {content: "Learn Redux in Depth", isCompleted: true},
        {content: "Learn Redux Saga in Depth", isCompleted: false},
        {content: "Learn Redux Redux-Form in Depth", isCompleted: false}
      ],
      term: ''
    }
    this.createTodo = this.createTodo.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.renderTodos = this.renderTodos.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateTodos = this.updateTodos.bind(this)
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

  renderTodos(todos) {
  	return(_.map(todos, (todo, index) => (
  		<DisplayToDos
				key={index}
				{...todo}
				{...this.updateTodos}
				onDelete={() => this.deleteTodo(todo)}
				updateTodos={this.updateTodos}
			/>
		)))
  }

  render() {
    return(
      <div>
        <div className="title">
          <h3>To~Do</h3>
        </div>
        <TodoInput
          createTodo={this.createTodo}
          onSubmit={this.handelSubmit}
          ref="inputValue"
          onClick={this.handelSubmit}
          onChange={this.onInputChange}
          value={this.state.term}/>
          <ul>
          	{this.renderTodos(this.state.todos)}
          </ul>
      </div>
    )
  }
}
