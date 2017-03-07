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

  handelSubmit = (event) => {
    event.preventDefault();
    if(this.refs.inputValue.value.length < 5) {return}
    const value = this.refs.inputValue.value
    this.props.createTodo(value)
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

