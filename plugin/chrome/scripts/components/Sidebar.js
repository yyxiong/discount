import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Header, Content, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class App extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed })
  }

  render () {
    return <Sider
      collapsible
      collapsed={this.state.collapsed}
      onCollapse={this.onCollapse}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['dash']} mode="inline">
        <Menu.Item key="dash">
          <Link to="/"><Icon type="pie-chart" />总览</Link>
        </Menu.Item>
        <SubMenu
          key="jd"
          title={<span><Icon type="user" /><span>京东</span></span>}
        >
          <Menu.Item key="jd-task">
            <Link to="/jd/task">任务</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="taobao"
          title={<span><Icon type="team" /><span>淘宝</span></span>}
        >
          <Menu.Item key="6">任务</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <Icon type="file" />
          <span>对接</span>
        </Menu.Item>
      </Menu>
    </Sider>
  }
}