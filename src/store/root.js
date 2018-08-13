import { combineReducers } from 'redux'

import formReducer from './formReducers.js'
import resReducer from './resReducers.js'

export default combineReducers({
  formReducer,
  resReducer
})
