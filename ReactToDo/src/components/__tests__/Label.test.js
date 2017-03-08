/**
 * Testing our Label component
 */

import React from 'react';
import { mount, shallow } from 'enzyme';

import Label from '../Label';

const children = "(<h1>Test</h1>)";
const renderComponent = (props = {}) => mount(
  <Label {...props}>
    {children}
  </Label>
);

describe('<Label />', () => {
  it('should render an <Label /> tag', () => {
    const renderedComponent = shallow(<Label />);
    expect(renderedComponent.type()).toEqual('label');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Label id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
