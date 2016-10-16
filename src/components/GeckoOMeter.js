import React, { Component } from 'react';
import styles from './GeckoOMeter.scss';

class GeckoOMeter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('https://widgister.herokuapp.com/challenge/frontend?fixed=1')
      .then((res) => res.json())
      .then((data) => this.setState(data))
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

  renderLoader() {
    return (
      <div>Loading...</div>
    );
  }

  renderDial() {
    const { min, max, value, unit } = this.state;
    const angle = this.calculatePercentage(min, max, value);

    return (
      <div className={styles.dial}>
        <div className={styles.needle} style={{ transform: `rotate(${angle}deg)`}}></div>
        <div className={styles.min}>{this.formatCurrency(min, unit)}</div>
        <div className={styles.max}>{this.formatCurrency(max, unit)}</div>
        <div className={styles.value}>{this.formatCurrency(value, unit)}</div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.base}>
        {Object.keys(this.state).length === 0 ? this.renderLoader() : this.renderDial()}
      </div>
    );
  }
}

export default GeckoOMeter;
