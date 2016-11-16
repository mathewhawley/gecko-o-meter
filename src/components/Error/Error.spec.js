import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ErrorMessage from './Error';

describe('<ErrorMessage />', function() {
  it('should render without errors', function() {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper).to.have.length(1);
  });
});
