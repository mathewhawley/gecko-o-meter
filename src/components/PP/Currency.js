import React from 'react';
import { formatAsCurrency } from '../../utils';

const PPCurrency = (WrappedComponent) => {
  function PPCurrency(props) {
    const { min, max, value, unit, format } = props;
    const formattedProps = {
      min: formatAsCurrency(min, unit, format),
      max: formatAsCurrency(max, unit, format),
      value: formatAsCurrency(value, unit, format),
    };

    return <WrappedComponent {...props} formattedProps={formattedProps} />;
  }

  return PPCurrency;
};

export default PPCurrency;
