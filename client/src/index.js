import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
