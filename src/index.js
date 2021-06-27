import React from 'react';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import { MainRoutes } from './routes/index';
import {Provider} from 'react-redux';

import './index.css';
// import './scss/custom.scss';
// import './scss/global.scss';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);