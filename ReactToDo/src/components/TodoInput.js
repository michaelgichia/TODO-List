import React, { Component } from 'react';

export default class TodoInput extends Component {
	render() {
		return(
			<div>
				<form onSubmit={this.props.onSubmit}>
					<input
						type="text"
						value={this.props.value}
						onChange={this.props.onChange}
						ref={this.props.refs}/>
					<input type="button" value="Add Todo" onClick={this.props.onClick}/>
				</form>
			</div>
		)
	}
}
