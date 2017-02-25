import React, { Component } from 'react';
import _ from 'lodash';

export default class DisplayToDos extends Component {
	constructor(props){
    super(props)
    this.state = {
    	isEditing: false
    }
    this.editTodo = this.editTodo.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  editTodo() {
  	this.setState({isEditing: true})
  }

  formSubmit(event) {
  	event.preventDefault()
  	const newContent = this.refs.newValue.value
  	const oldContent = this.props.content
  	this.props.updateTodos(newContent, oldContent)
  	this.setState({isEditing: false})
  }

   render() {
   	if(this.state.isEditing) {
   		return(
   			<form onSubmit={this.formSubmit}>
   				<input
   					type="text"
   					defaultValue={this.props.content}
   					ref="newValue"
   				/>
   			</form>
   		)
   	}
		return(
			<li key={this.props.keys}>
				<div className="todo-row">
					<input type="checkbox"/>
					<label>{this.props.content}</label>
					<button onClick={this.editTodo}>Edit</button>
					<button onClick={this.props.onDelete}>Delete</button>
				</div>
			</li>
		)
  }
}
 
