import React, { PropTypes } from 'react';
import styles from './Error.scss';

const ErrorMessage = ({ text }) => (
  <div className={styles.base}>{text}</div>
);

ErrorMessage.defaultProps = {
  text: 'Unable to retrieve data.',
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

export default ErrorMessage;
