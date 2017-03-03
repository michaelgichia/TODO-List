import React from 'react';

export default (props) => {
	return (
		<div className="task">
		  <label className="waves-effect waves-light" id="all-todo" onClick={props.displayAllTodos}>All</label>
		  <label className="waves-effect waves-light" id="toggle-all" onClick={props.toggleAll}>Toggle</label>
		  <label className="waves-effect waves-light" id="active-todo" onClick={props.displayActiveTodos}>Active</label>
		  <label className="waves-effect waves-light" id="complete-todo" onClick={props.displayCompletedTodos}>Completed</label>
		</div>
	);
}
