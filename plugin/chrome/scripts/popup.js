import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import Container from './components/Container'

class App extends Component {
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar/>

        <Container>
          <div>aaa</div>
        </Container>
      </Layout>
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
