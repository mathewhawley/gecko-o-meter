import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GeckoOMeter from './GeckoOMeter';

describe('<GeckoOMeter />', () => {
  it('should exist', () => {
    const wrapper = shallow(<GeckoOMeter />);
    expect(wrapper).to.exist;
  });
});
