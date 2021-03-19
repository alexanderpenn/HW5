/* eslint-disable semi */
import { combineReducers } from 'redux'
import ListReducer from './listReducer'
import IntroReducer from './introReducer'

export default combineReducers({
  ListReducer,
  IntroReducer,
})
