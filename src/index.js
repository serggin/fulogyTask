import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import './index.css';
import App from './App';
import {store} from './components/Store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
