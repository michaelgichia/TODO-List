/*
 *
 * ToDo reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import {
  ADD_TODO,
  TOGGLE_TODO,
} from './constants';


const initialState = {
	todos: [
	{
		content: "es6, react, redux, sagas, material-ui, styled-components",
		isCompleted: true,
		id: 0
	}]
};

function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
    	const newTodo = { 
    		content: action.payload, 
    		isCompleted: false, 
    		id: state.todos.reduce((id, todo) => Math.max(todo.id, id), -1) + 1 }
      return Object.assign({},
      	state, {
      	todos: state.todos.concat(newTodo)
      });

    case TOGGLE_TODO:
    	const prevTodo = state.todos.map(todo =>
        todo.id === action.id ?
          { ...todo, isCompleted: !todo.isCompleted } : todo)
    	
      return Object.assign({},
      	state, prevTodo);

    default:
      return state;
  }
}

export default toDoReducer;
