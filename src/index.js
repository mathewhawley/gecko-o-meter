import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

import GeckoOMeter from './components/GeckoOMeter';
import Currency from './components/Currency';
import Dial from './components/Dial';

import './styles/main';
import styles from './components/GeckoOMeter/GeckoOMeter.scss';

const CurrencyDial = Currency(Dial);
const CurrencyMeter = GeckoOMeter(CurrencyDial);

ReactDOM.render(
  <div className={styles.base}>
    <CurrencyMeter promise={fetch('https://widgister.herokuapp.com/challenge/frontend')} />
  </div>,
  document.getElementById('root')
);
