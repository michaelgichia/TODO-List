import {
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO
} from './constants';

export const addTodo = input => ({type: ADD_TODO, payload: input})
export const completeTodo = id => ({type: TOGGLE_TODO, id})
export const editTodo = (id, input) => ({type: EDIT_TODO, id, input})
