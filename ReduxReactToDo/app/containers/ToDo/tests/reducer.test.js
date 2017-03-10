
import { fromJS } from 'immutable';
import toDoReducer from '../reducer';

describe('toDoReducer', () => {
  it('returns the initial state', () => {
    expect(toDoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
