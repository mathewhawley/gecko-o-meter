import React, { Component, PropTypes } from 'react';
import styles from './GeckoOMeter.scss';

class GeckoOMeter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState(data))
      .catch((err) => console.error(err));
  }

  calculatePercentage(min, max, value) {
    return ((value - min) * 180) / (max - min);
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

GeckoOMeter.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GeckoOMeter;
