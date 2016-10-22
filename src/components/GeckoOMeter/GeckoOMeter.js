import React, { PropTypes } from 'react';
import Dial from 'components/Dial';
import Store from 'components/Store';
import ViewHandler from 'components/ViewHandler';
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
