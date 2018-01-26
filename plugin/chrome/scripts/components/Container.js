import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Layout, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ])
  }

  render () {
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px',  width: '600px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          逐梦者 ©2018
        </Footer>
      </Layout>
    )
  }
}