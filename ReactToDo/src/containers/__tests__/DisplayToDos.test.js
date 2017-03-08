import React from 'react'
import { spy } from 'sinon';
import { mount, shallow } from 'enzyme';

import DisplayToDos from '../DisplayToDos'

describe('App components', () => {
  const onDeleteClick = spy();
  const props = {
    todos: [
      {content: "Learn Redux in Depth", isCompleted: true}
      ],
    onDelete: onDeleteClick(),
    id: 0,
    htmlFor: 0

  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <DisplayToDos {...props}/>
    );
  });

  it('renders correctly', () => {
    const tree = shallow(
      <DisplayToDos />
    );
    expect(tree).toMatchSnapshot();
  });

  it('delete todo when delete clicked', () => {
    wrapper.find('.delete').simulate('click');
    expect(onDeleteClick.calledOnce).toBe(true);
  });

})


