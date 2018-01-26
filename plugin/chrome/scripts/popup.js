import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import { rehydrate } from 'rfx-core'
import './stores/index.js'
const store = rehydrate()

import Index from './app'
class App extends Component {
  render () {
    return (
      <Router>
        <Provider store={store}>
          <Index/>
        </Provider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

// chrome.tabs.getAllInWindowAsync()
//   .then((tabs) => tabs.filter((tab) => tab.url.indexOf('.jd.com') > -1))
//   .then(console.info)
