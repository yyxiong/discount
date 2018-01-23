import later from 'later'

import {
  getCouponListOfCatalogId,
  getCoupon
} from './api'

// getCouponListByCatalogId(0).then((coupons) => {
//   console.info('coupons', coupons.length)
//   const coupon = coupons.find((item) => item.ruleKey === 'c2ae55dca5e2211299ac3885e0f984e0f26d9731c5b4946f839ddd7f7fe6098c087f17adb779f3126bc8d8d19d5ab2cb')
//   console.info(coupon)

//   // return getCoupon(coupon.ruleKey)
//   // {message: "领取成功！感谢您的参与，祝您购物愉快~", code: "999", success: true}
// }).then(console.info)
// .catch(console.error)

/**
 * 添加定时任务
 * @param {Object} options
 */
function addSchedule(options) {

}

function listener () {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'hello') {
      sendResponse('hello response')
    } else {
      sendResponse('test')
    }
  })
}

export default function () {

  listener()

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
