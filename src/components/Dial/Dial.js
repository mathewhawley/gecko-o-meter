import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { calculateAngle, formatAsCurrency } from '../../utils';
import styles from './Dial.scss';
import transitionStyles from '../../styles/transitions.scss';

const Dial = ({ min, max, value, unit, format }) => {
  const angle = calculateAngle(min, max, value);
  const formattedValue = formatAsCurrency(value, unit, format);

  const arcProgress = classnames({
    [styles.bad]: angle < 60,
    [styles.meh]: angle >= 60 && angle < 120,
    [styles.good]: angle >= 120,
  });

  return (
    <div className={styles.base}>
      <svg viewBox='0 0 200 185' version='1.1'>

        <ReactCSSTransitionGroup
          component='g'
          transitionName={transitionStyles}
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          <text
            className={styles.value}
            x={100}
            y={40}
            textAnchor='middle'
            key='value'
          >
            {formattedValue}
          </text>
        </ReactCSSTransitionGroup>

        <g>
          <path
            className={styles.arc}
            strokeWidth={16}
            d='M15 155 A85 85 0 0 1 185 155'
          />
          <path
            className={arcProgress}
            strokeWidth={16}
            strokeDashoffset={300}
            strokeDasharray={300}
            d='M15 155 A85 85 0 0 1 185 155'
          />
        </g>

        <g className={styles.indicator}>
          <g transform={`rotate(${angle} 100 155)`}>
            <path
              className={styles.outline}
              strokeWidth={7}
              strokeDashoffset={110}
              strokeDasharray={110}
              strokeLinecap='round'
              d='M 3 155 H 100'
            />
            <path
              className={styles.fill}
              strokeWidth={3}
              strokeDashoffset={110}
              strokeDasharray={110}
              strokeLinecap='round'
              d='M 3 155 H 100'
            />
          </g>
          <circle
            className={styles.circle}
            cx={100}
            cy={155}
            r={4}
            strokeWidth={3}
            strokeDashoffset={35}
            strokeDasharray={35}
          />
        </g>

        <ReactCSSTransitionGroup
          component='g'
          transitionName={transitionStyles}
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          <g className={styles.range} key='range'>
            <text x={5} y={180} textAnchor='start'>{min}</text>
            <text x={195} y={180} textAnchor='end'>{max}</text>
          </g>
        </ReactCSSTransitionGroup>

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
