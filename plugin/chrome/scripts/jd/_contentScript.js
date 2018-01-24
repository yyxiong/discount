import later from 'later'

import {
  getCouponListOfCatalogId,
  getCoupon
} from './api'

/**
 * 添加定时任务
 * @param {Object} options
 */
function addSchedule(options) {

}

/**
 * 删除定时任务
 */
function removeSchedule(options) {

}

/**
 * 监听任务的增减
 */
function listen () {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'hello') {
      sendResponse('hello response')
    } else {
      sendResponse('test')
    }
  })
}

export default function () {

  listen()

  getCouponListOfCatalogId(0).then((coupons) => {
    console.info('coupons', coupons)
    // 获取可选抢的优惠券列表
    chrome.runtime.sendMessage({
      coupons: coupons
    }, (response) => {
      console.log('response', response.farewell)
    })
  }).catch(console.error)
}
