import { combineReducers } from 'redux'

import formReducer from './formReducers.js'
import resReducer from './resReducers.js'
import rootReducer from './rootReducers.js'

export default combineReducers({
  formReducer,
  resReducer,
  rootReducer
})
