import React from 'react'
import Reboot from 'material-ui/Reboot'

export default class App extends React.Component {
  render () {
    return (
      <article>
        <Reboot/>
        <h1>Hi.</h1>
        <em>Now let's play with React!</em>
      </article>
    )
  }
}

// import ReactDOM from 'react-dom'

// export default function () {

//   chrome.storage.local.get('coupons', (val) => {
//     console.info('local', val)
//   })
// }
