import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { calculateAngle, formatAsCurrency } from '../../utils';
import styles from './Dial.scss';

const Dial = ({ min, max, value, unit, format }) => {
  const angle = calculateAngle(min, max, value);
  const formattedValue = formatAsCurrency(value, unit, format);

  const classes = classnames({
    [styles.bad]: angle < 60,
    [styles.meh]: angle >= 60 && angle < 120,
    [styles.good]: angle >= 120,
  });

  return (
    <div className={classes}>
      <div className={styles.needle} style={{ transform: `rotate(${angle}deg)` }}></div>
      <div className={styles.value}>{formattedValue}</div>
      <div className={styles.min}>{min}</div>
      <div className={styles.max}>{max}</div>
    </div>
  );
};

Dial.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
  format: PropTypes.string,
};

export default Dial;
