import React, { PropTypes } from 'react';

export default function Task(props) {
	return (
		<div className="task">
		  <label className="waves-effect waves-light" id="all-todo" onClick={props.displayAllTodos}>All</label>
		  <label className="waves-effect waves-light" id="toggle-all" onClick={props.toggleAll}>Toggle</label>
		  <label className="waves-effect waves-light" id="active-todo" onClick={props.displayActiveTodos}>Active</label>
		  <label className="waves-effect waves-light" id="complete-todo" onClick={props.displayCompletedTodos}>Completed</label>
		</div>
	);
}

Task.propTypes = {
	displayAllTodos: PropTypes.func.isRequired,
	toggleAll: PropTypes.func.isRequired,
	displayActiveTodos: PropTypes.func.isRequired,
	displayCompletedTodos: PropTypes.func.isRequired
}


