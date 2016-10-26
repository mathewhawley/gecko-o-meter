import React, { PropTypes } from 'react';
import _ from 'lodash';
import { formatAsCurrency, entries } from '../../utils';

const PPCurrency = (WrappedComponent) => {
  function PPCurrency(props) {
    const { unit = 'USD' } = props;
    const formattedProps = {};

    for (const [key, value] of entries(props)) {
      if (_.isNumber(value)) {
        formattedProps[key] = formatAsCurrency(props[key], unit);
      }
    }

    return <WrappedComponent {...props} formattedProps={formattedProps} />;
  }

  PPCurrency.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    unit: PropTypes.string,
    format: PropTypes.string,
  };

  return PPCurrency;
};

export default PPCurrency;
