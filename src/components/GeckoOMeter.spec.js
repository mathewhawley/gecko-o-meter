import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import GeckoOMeter from './GeckoOMeter';

describe('<GeckoOMeter />', () => {
  it('should exist', () => {
    const wrapper = shallow(<GeckoOMeter />);
    expect(wrapper).to.exist;
  });

  it('should mount with an empty state object', () => {
    const wrapper = shallow(<GeckoOMeter />);

    expect(
      wrapper.state()
    ).to.be.instanceof(Object);

    expect(
      Object.keys(wrapper.state()).length
    ).to.equal(0);

    expect(
      wrapper.state().constructor === Object
    ).to.equal(true);
  });

  it('should call `componentDidMount`', () => {
    const spy = sinon.spy(GeckoOMeter.prototype, 'componentDidMount');
    const wrapper = mount(<GeckoOMeter />);

    expect(
      spy.calledOnce
    ).to.equal(true);
  });
});
