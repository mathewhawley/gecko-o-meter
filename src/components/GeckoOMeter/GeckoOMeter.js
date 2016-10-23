import React, { PropTypes } from 'react';
import Dial from '../Dial';
import Store from '../Store';
import ViewHandler from '../ViewHandler';
import styles from './GeckoOMeter.scss';

const Widget = Store(ViewHandler(Dial));

const GeckoOMeter = ({ promise }) => (
  <div className={styles.base}>
    <Widget promise={promise} />
  </div>
);

GeckoOMeter.propTypes = {
  promise: PropTypes.object.isRequired,
};

export default GeckoOMeter;
