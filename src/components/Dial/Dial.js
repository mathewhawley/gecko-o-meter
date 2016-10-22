import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { calculateAngle, formatAsCurrency } from '../../utils';
import styles from './Dial.scss';

const Dial = ({ min, max, value, unit, format }) => {
  const angle = calculateAngle(min, max, value);
  const formattedValue = formatAsCurrency(value, unit, format);

  const arcClass = classnames({
    [styles.bad]: angle < 60,
    [styles.meh]: angle >= 60 && angle < 120,
    [styles.good]: angle >= 120,
  });

  return (
    <div className={styles.base}>
      <svg viewBox='0 0 200 150' version='1.1'>
        <path className={arcClass} d='M15 125 A1 1 0 0 1 185 125' strokeWidth={16} />
        <g className={styles.indicator}>
          <path
            className={styles.outline}
            strokeWidth='7px'
            strokeDashoffset='100px'
            strokeDasharray='100px'
            strokeLinecap='round'
            d='M 0 125 H 100'
            transform={`rotate(${angle} 100 125)`}
          />
          <path
            className={styles.needle}
            strokeWidth='3px'
            strokeDashoffset='100px'
            strokeDasharray='100px'
            strokeLinecap='round'
            d='M 0 125 H 100'
            transform={`rotate(${angle} 100 125)`}
          />
          <circle className={styles.circle} cx={100} cy={125} r={5} strokeWidth={2.5} />
        </g>
      </svg>
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

// <div className={classes}>
//  <div className={styles.needle} style={{ transform: `rotate(${angle}deg)` }}></div>
//  <div className={styles.value}>{formattedValue}</div>
//  <div className={styles.min}>{min}</div>
//  <div className={styles.max}>{max}</div>
// </div>
