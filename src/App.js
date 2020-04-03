import React from 'react'
import { Router } from 'react-router-dom'
import history from './navigation/history'
import Routes from './navigation/routes'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div id="b-o">
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </div>
  )
}
export default App