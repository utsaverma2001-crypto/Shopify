import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
;

ReactDOM.render(
  // Provider is used to provide store on all sites and to use the stored data
  <Provider store={store}>
      <>
        <App />
      </>
  </Provider>
  ,
  document.getElementById('root')
);
