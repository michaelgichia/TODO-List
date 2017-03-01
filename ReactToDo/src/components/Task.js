import React, { Component } from 'react';

export default class Task extends Component {
	constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this)
    this.activeTodos = this.activeTodos.bind(this)
    this.completed = this.completed.bind(this)
  }

  toggle() {

  }

  activeTodos() {

  }

  completed() {

  }

	render() {
		return(
			<div className="task">
			  <label className="waves-effect waves-light" id="all-todo">All</label>
			  <label className="waves-effect waves-light" id="toggle-all" onClick={this.props.toggleAll}>Toggle</label>
			  <label className="waves-effect waves-light" id="active-todo">Active</label>
			  <label className="waves-effect waves-light" id="complete-todo">Completed</label>
			</div>
		)
	}
}
