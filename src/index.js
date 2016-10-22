if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import GeckoOMeter from 'components/GeckoOMeter';
import './styles/main';

ReactDOM.render(
  <div className='container'>
    {_.times(12, (index) => (<GeckoOMeter key={index} promise={fetch('https://widgister.herokuapp.com/challenge/frontend')} />))}
  </div>,
  document.getElementById('root')
);
