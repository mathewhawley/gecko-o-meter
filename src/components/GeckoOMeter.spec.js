import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import GeckoOMeter from './GeckoOMeter';

describe('<GeckoOMeter />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GeckoOMeter url='https://widgister.herokuapp.com/challenge/frontend?fixed=1' />);
  });

  it('should exist', () => {
    expect(wrapper).to.exist;
  });

  it('should mount with an empty state object', () => {
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
    const wrapper = mount(<GeckoOMeter url='https://widgister.herokuapp.com/challenge/frontend?fixed=1' />);

    expect(spy.calledOnce).to.equal(true);
  });

  it('should have a method to calculate the angle for the needle', () => {
    const spy = sinon.spy(GeckoOMeter.prototype, 'calculatePercentage');

    expect(spy(0, 10, 1)).to.equal(10);
  });

  it('should have a method to add currency symbol to numbers', () => {
    const spy = sinon.spy(GeckoOMeter.prototype, 'formatCurrency');

    expect(spy(25, 'GBP')).to.equal('£25');
    expect(spy(25, 'USD')).to.equal('$25');
    expect(spy(25, 'EUR')).to.equal('€25');
  });
});
