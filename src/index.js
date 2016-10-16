import React from 'react';
import ReactDOM from 'react-dom';
import GeckoOMeter from './components/GeckoOMeter';
import './styles/main';

ReactDOM.render(
  <GeckoOMeter url='https://widgister.herokuapp.com/challenge/frontend?fixed=1' />,
  document.getElementById('root')
);
