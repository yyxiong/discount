import _ from 'lodash'
import Auth from './auth'

module.exports = () => {
  if (!Auth.isLogin()) {
    chrome.notifications.createAsync({
      type: 'basic',
      iconUrl: '/images/logo.png',
      title: '登陆提醒',
      message: '您的京东还未登陆',
    })
  }
}
