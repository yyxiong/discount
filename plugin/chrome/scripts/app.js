import React from 'react'
import ReactDOM from 'react-dom'

// import './promise'
// import JD from './jd/_app'

// JD()
import App from './jd/_app'

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

// chrome.tabs.getAllInWindowAsync()
//   .then((tabs) => tabs.filter((tab) => tab.url.indexOf('.jd.com') > -1))
//   .then(console.info)
