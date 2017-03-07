import React, { Component } from 'react';
import _ from 'lodash';

export default class TodoInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: ''
		}
	}
  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  createTodo = (value) => {
    let todos = _.concat(this.state.todos, { content: value, isCompleted: false})
    this.setState({todos})
  }

  handelSubmit = (event) => {
    event.preventDefault();
    if(this.refs.inputValue.props.value.length < 5) {return}
    const value = this.refs.inputValue.props.value
    this.createTodo(value)
    this.setState({term: ""})
  }

	render() {
		return(
			<div>
				<form onSubmit={this.handelSubmit} className="z-depth-2">
					<input
						type="text"
						value={this.state.term}
						onChange={this.onInputChange}
						ref="inputValue"
						placeholder="Enter to do..."/>
				</form>
			</div>
		)
	}
}

