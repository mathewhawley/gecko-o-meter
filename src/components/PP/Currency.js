import React, { PropTypes } from 'react';
import _ from 'lodash';
import { formatAsCurrency } from '../../utils';

const PPCurrency = (WrappedComponent) => {
  function PPCurrency(props) {
    const { unit = 'USD' } = props;
    const formattedProps = Object.keys(props).reduce((obj, key) => {
      if (_.isNumber(props[key])) {
        obj[key] = formatAsCurrency(props[key], unit);
        return obj;
      }
      return obj;
    }, {});

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
