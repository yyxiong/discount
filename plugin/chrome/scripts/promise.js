/**
 * API的promise化，
 * 可参考http://bluebirdjs.com/docs/api/promise.promisifyall.html
 */
import bluebird from 'bluebird'

function promisifier(method) {
  // return a function
  return function promisified(...args) {
    // which returns a promise
    return new Promise((resolve) => {
      args.push(resolve)
      method.apply(this, args)
    })
  }
}

function promisifyAll(obj, list) {
  list.forEach(api => bluebird.promisifyAll(obj[api], { promisifier }))
}

// let chrome extension api support Promise
promisifyAll(chrome, [
  'browserAction',
  'cookies',
  'notifications',
  'tabs',
  'runtime',
  'windows',
  // 'contextMenus'
])

promisifyAll(chrome.storage, [
  'local',
])
