import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import TodoInput from './TodoInput';
import DisplayToDos from './DisplayToDos';
import Task from './Task';

export default class ToDo extends Component {
	constructor(props){
    super(props)
    this.state = {
      todos: [
        {content: "Learn Redux in Depth", isCompleted: true},
        {content: "Learn Redux Saga in Depth", isCompleted: false},
        {content: "Learn Redux Redux-Form in Depth", isCompleted: false}
      ],
      active: false,
      complete: false
    }
  }

  deleteTodo = (done) => {
    const {todos} = this.state
  	_.remove(todos, todo => todo === done )
    this.setState({todos})
  }

  updateTodos = (newContent, oldContent) => {
  	const {todos} = this.state
  	const oldTodoObj = _.find(todos, todo => todo.content === oldContent)
  	oldTodoObj.content = newContent
  	this.setState({todos})
  }

  updateCheckbox = (oldCheckboxVal) => {
    const {todos} = this.state
    const newValue = _.find(todos, todo => todo.content === oldCheckboxVal.content)
    newValue.isCompleted = !newValue.isCompleted;
    this.setState({todos});
  }

  updateState = (prevstate) => {
    this.setState({todos: prevstate})
  }

  displayActiveTodos = () => {
    this.setState(
      {active: true, complete: false}
    )
  }

  displayCompletedTodos = () => {
    this.setState({active: false, complete: true})
  }

  displayAllTodos = () => {
    this.setState({active: false, complete: false})
  }

  playActions = () => {
    const {todos, active, complete} = this.state;
    if(active) {
      return _.filter(todos, todo => todo.isCompleted === false);
    } else if(complete) {
      return _.filter(todos, todo => todo.isCompleted === true);
    } else if(!complete && !active) {
      return todos;
    } else {
      return todos;
    }
  }

  renderTodos = () => {
    let todoItems = this.playActions();
  	return(_.map(todoItems, (todo, index) => (
  		<DisplayToDos
				key={index}
        {...this.state}
				{...todo}
				{...this.updateTodos}
        id={index}
        HtmlFor={index}
				onDelete={() => this.deleteTodo(todo)}
				updateTodos={this.updateTodos}
        updateCheckbox={this.updateCheckbox}
			/>
		)))
  }

  render() {
    return(
      <div>
        <div className="title col l6 m8 s12 offset-l3 offset-m2">
          <p>To~Do</p>
        </div>
        <div className="col l6 m8 s12 offset-l3 offset-m2">
          <TodoInput />
          <Task
            {...this.state}
            updateState={this.updateState} 
            displayActiveTodos={this.displayActiveTodos}
            displayCompletedTodos={this.displayCompletedTodos}
            displayAllTodos={this.displayAllTodos}
          />
        </div>
          <div className="col l6 m8 s12 offset-l3 offset-m2">
            <ul>
              {this.renderTodos()}
            </ul>
          </div>
      </div>
    )
  }
}

ToDo.propTypes = {
  value: PropTypes.number,
};
