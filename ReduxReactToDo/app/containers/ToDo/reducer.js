import { fromJS } from 'immutable';
import _ from 'lodash';
import {
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO
} from './constants';


const initialState = [
	{
		content: "es6, react, redux, sagas, material-ui, styled-components",
		isCompleted: true,
		id: 0
	}
];


function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
    	return [...state, 
    		{
          content: action.payload, 
    		  isCompleted: false, 
    		  id: state.reduce((id, todo) => Math.max(todo.id, id), -1) + 1
        }
      ]

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
        { ...todo, isCompleted: !todo.isCompleted } : todo)

    case EDIT_TODO:
      return state.map(todo => todo.id === action.id ?
        {...todo, content: action.input} : todo
      )

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)

    default:
      return state;
  }
}

export default toDoReducer;
