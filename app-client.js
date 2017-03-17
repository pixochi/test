import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './src/containers/Root';
import configureStore from './src/store/configureStore';

const store = configureStore();

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('react-container')
);
