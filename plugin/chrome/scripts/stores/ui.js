import {
  observable,
  action
} from 'mobx'

export default class UIState {
  @observable tabKey
  @observable clientHeight

  constructor () {
    this.tabKey = 'user'
    this.clientHeight = document.documentElement.clientHeight || 667
  }

  @action setTabKey(tabKey) {
    this.tabKey = tabKey
  }

}
