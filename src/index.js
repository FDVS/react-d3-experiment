import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from '../src/containers/app'

import './styles.css'
import 'semantic-ui-css/semantic.min.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
