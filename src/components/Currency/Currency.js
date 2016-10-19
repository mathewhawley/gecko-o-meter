import React, { Component, PropTypes } from 'react';
import { formatAsCurrency, calculateAngle } from '../../utils';

const Currency = (WrappedComponent) => {
  function Currency({ min, max, value, unit, format}) {
    const updatedProps = {
      min: formatAsCurrency(min, unit, format),
      max: formatAsCurrency(max, unit, format),
      value: formatAsCurrency(value, unit, format),
      angle: calculateAngle(min, max, value),
    };

    return <WrappedComponent {...updatedProps} />;
  };

  Currency.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string,
    format: PropTypes.string,
  };

  return Currency;
}

export default Currency;
