import React, { Component } from 'react';

export default class TodoInput extends Component {
	render() {
		return(
			<div>
				<form onSubmit={this.props.onSubmit} className="z-depth-2">
					<input
						type="text"
						value={this.props.value}
						onChange={this.props.onChange}
						ref={this.props.refs}
						placeholder="Enter to do..."/>
				</form>
			</div>
		)
	}
}
