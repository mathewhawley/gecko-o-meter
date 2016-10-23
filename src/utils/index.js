export const calculateAngle = (min, max, value) => {
  const result = ((value - min) * 180) / (max - min);

  if (result > 180) {
    return 180;
  } else if (result < 0) {
    return 0;
  } else {
    return result;
  }
};

export const formatAsCurrency = (num, iso, format) => {
  if (typeof format === 'undefined') {
    return num;
  }

  return num.toLocaleString('en', {
    style: 'currency',
    currency: iso,
    minimumFractionDigits: 0,
  });
};
