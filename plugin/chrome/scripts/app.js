import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import Sidebar from './components/Sidebar'
import Container from './components/Container'
import Dashboard from './components/Dashboard'

import JDTask from './jd/popup/task'

import { rehydrate } from 'rfx-core'
import './stores/index.js'
const store = rehydrate()

@withRouter
export default class App extends Component {
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar/>

        <Container>
          <Switch>
            <Route exact path="/jd/task" component={JDTask}/>
            <Route exact path="/" component={Dashboard}/>
            <Route component={Dashboard}/>
          </Switch>
        </Container>
      </Layout>
    )
  }
}

// chrome.tabs.getAllInWindowAsync()
//   .then((tabs) => tabs.filter((tab) => tab.url.indexOf('.jd.com') > -1))
//   .then(console.info)
