import React, { PropTypes } from 'react';
import styles from './Dial.scss';

const Dial = ({ min, max, value, angle }) => (
  <div className={styles.base}>
    <div className={styles.needle} style={{ transform: `rotate(${angle}deg)` }}></div>
    <div className={styles.value}>{value}</div>
    <div className={styles.min}>{min}</div>
    <div className={styles.max}>{max}</div>
  </div>
);

Dial.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
};

export default Dial;
