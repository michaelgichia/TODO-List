import React from 'react';
import Li from './Li';
import Label from './Label';
import Checkbox from './Checkbox';
import Navigators from './Navigators';

class TodoDisplay extends React.Component { // eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props)
		this.state = {
			isEditing: false,
			text:  ''
		}
		this.editing = this.editing.bind(this)
		this.handelEditTodo = this.handelEditTodo.bind(this)
		this.updateText = this.updateText.bind(this)
	}

	editing() {
		this.setState({isEditing: true})
	}

	updateText(e) {
		this.setState({text: e.target.value})
	}

	handelEditTodo(e, id) {
		e.preventDefault()
		const value = this.refs.editInput.value
		this.props.editTodo(id, value)
		this.setState({ isEditing: false })
	}
	
  render() {
  	const {todo} = this.props;
		if(this.state.isEditing) {
			return (
				<Li>
					<form onSubmit={(e) => this.handelEditTodo(e, todo.id)}>
						<input
							className="edit-input"
							type='text'
							defaultValue={todo.content}
							ref="editInput"
						/>
					</form>
				</Li>
			)
		}

		return (
			<Li key={this.props.keys}>
				<Checkbox
					onChange={() => this.props.completeTodo(todo.id)}
					defaultChecked={todo.isCompleted ? "checked":""}
					type="checkbox"/>
				<Label>
					{todo.content}
				</Label>
				<Navigators onEdit={this.editing}/>
			</Li>
		);
  }
}

TodoDisplay.propTypes = {

};

export default TodoDisplay;
