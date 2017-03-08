import React from 'react';
import { mount, shallow } from 'enzyme';

import TodoInput from '../TodoInput';

describe('TodoInput components', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TodoInput {...props}/>);
  });

  it('renders correctly', () => {
    const tree = shallow(<TodoInput />);
    expect(tree).toMatchSnapshot();
  });
});