/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable semi */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './src/components/App'
import MainReducer from './src/reducers/index'

const store = createStore(MainReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'),
)
