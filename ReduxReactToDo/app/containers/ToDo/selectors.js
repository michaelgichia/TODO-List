import { createSelector } from 'reselect';

/**
 * Direct selector to the toDo state domain
 */
const selectToDoDomain = () => (state) => state.get("toDo");

/**
 * Other specific selectors
 */


/**
 * Default selector used by ToDo
 */

const makeSelectToDo = () => createSelector(
  selectToDoDomain(),
  (substate) => substate
);

export {
  selectToDoDomain,
};
export default makeSelectToDo;
