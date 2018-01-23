// import React from 'react'
// import ReactDOM from 'react-dom'

// ReactDOM.render(
//   <div />,
//   document.querySelector('#root')
// )
import './promise'
import JD from './jd/_app'


// chrome.tabs.getAllInWindowAsync()
//   .then((tabs) => tabs.filter((tab) => tab.url.indexOf('.jd.com') > -1))
//   .then(console.info)

console.info('app...')
JD()
