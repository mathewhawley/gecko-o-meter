import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GeckoOMeter from './GeckoOMeter';

describe('<GeckoOMeter />', () => {
  it('should exist', () => {
    const wrapper = shallow(<GeckoOMeter />);
    expect(wrapper).to.exist;
  });

  it('should mount with an empty state object', () => {
    const wrapper = shallow(<GeckoOMeter />);

    expect(
      Object.keys(wrapper.state()).length
    ).to.equal(0);

    expect(
      wrapper.state().constructor === Object
    ).to.equal(true);
  });
});
