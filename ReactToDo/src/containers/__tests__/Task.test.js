import React from 'react';
import { mount, shallow } from 'enzyme';

import Task from '../Task';

describe('Task components', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Task {...props}/>);
  });

  it('renders correctly', () => {
    const tree = shallow(<Task />);
    expect(tree).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Task />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
