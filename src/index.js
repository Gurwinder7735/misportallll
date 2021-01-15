import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appReducer from './redux/appReducer'

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(appReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    {console.log(store)}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

