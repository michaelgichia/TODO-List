import {
  ADD_TODO,
  TOGGLE_TODO
} from './constants';

export const addTodo = input => ({type: ADD_TODO, payload: input})
export const completeTodo = id => ({type: TOGGLE_TODO, id})
