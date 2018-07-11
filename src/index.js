import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import registerServiceWorker from './config/registerServiceWorker'
import { history } from './config/historyRouter'

import App from './modules/App'

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
