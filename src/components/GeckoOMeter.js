import React, { Component } from 'react';

class GeckoOMeter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('https://widgister.herokuapp.com/challenge/frontend?fixed=1')
      .then((res) => res.json())
      .then((data) => this.setState({
        ...data,
        min: this.formatCurrency(data.min, data.unit),
        max: this.formatCurrency(data.max, data.unit),
        value: this.formatCurrency(data.value, data.unit),
      }))
      .catch((err) => console.error(err));
  }

  calculatePercentage(min, max, value) {
    return ((value - min) * 100) / (max - min);
  }

  formatCurrency(num, ISO) {
    return num.toLocaleString('en', {
      style: 'currency',
      currency: ISO,
      maximumFractionDigits: 0,
    });
  }

  render() {
    return <div></div>;
  }
}

export default GeckoOMeter;
