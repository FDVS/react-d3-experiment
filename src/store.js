import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/combined.js'

const initialState = {}
const enhancers = []
const middleware = [thunk]

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension())
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
