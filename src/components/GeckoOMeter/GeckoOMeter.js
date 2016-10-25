import React, { PropTypes } from 'react';
import Dial from '../Dial';
import Store from '../Store';
import PPCurrency from '../PP/Currency';
import styles from './GeckoOMeter.scss';

const Widget = Store(PPCurrency(Dial));

const GeckoOMeter = ({ fetchData }) => (
  <div className={styles.base}>
    <Widget promise={fetchData()} />
  </div>
);

export default GeckoOMeter;
