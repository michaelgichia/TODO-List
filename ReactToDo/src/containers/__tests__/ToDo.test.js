import React from 'react';
import { mount, shallow } from 'enzyme';

import ToDo from '../ToDo';

describe('ToDo components', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ToDo {...props}/>);
  });

  it('renders correctly', () => {
    const tree = shallow(<ToDo />);
    expect(tree).toMatchSnapshot();
  });
});
