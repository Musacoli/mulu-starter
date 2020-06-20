import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/stylesheets/index.css'
import * as serviceWorker from 'serviceWorker/serviceWorker'
import App from 'App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
