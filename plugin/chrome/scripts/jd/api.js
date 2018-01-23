import _ from 'lodash'
import { getRequestJson, jdCheck } from '../utils/request'

/**
 * 获取券类目的接口
 */
export function getCatalogList () {
  const callback = `jQuery${Math.floor(1e7 * Math.random())}`
  return getRequestJson({
    url: 'https://a.jd.com/indexAjax/getCatalogList.html',
    params: {
      callback
    }
  }, {
    start: `${callback}(`,
    end: ')'
  }).then((data) => jdCheck(data, 'catalogList'))
}
/**
 * 获取券列表
 *
 * totalNum 总数，可以用来判断是否还有数据
 * 关键字段：
 * {
 *    rate       // 已抢程度，百分比
 *    startTime  // 开抢时间
 *    receiveFlag // 是否已经抢
 * }
 */
export function getCouponListByCatalogId (catalogId, options) {
  const callback = `jQuery${Math.floor(1e7 * Math.random())}`
  return getRequestJson({
    url: 'https://a.jd.com/indexAjax/getCouponListByCatalogId.html',
    params: _.assign({
      callback,
      catalogId: 0,
      page: 1,
      pageSize: 30,
    }, options)
  }, {
    start: `${callback}(`,
    end: ')'
  })
  .then((data) => jdCheck(data))
}

function loadCouponListOfCatalogId(list, catalogId, options) {
  return getCouponListByCatalogId(catalogId, options)
  .then((data) => {
    data.couponList.forEach((item) => {
      if (item.limitStr.indexOf('全品类') > -1 ||
          item.limitStr.indexOf('手机话费') > -1) {
        list.push(item)
      }
    })

    // 存在下一页
    if (data.totalNum > options.page * options.pageSize) {
      options.page ++
      return loadCouponListOfCatalogId(list, catalogId, options)
    }
  })
}

/**
 * 获取某个类目的所有优惠券
 * 自动翻页
 */
export function getCouponListOfCatalogId (catalogId) {
  const list = []
  let options = {
    page: 1,
    pageSize: 30
  }

  return loadCouponListOfCatalogId(list, catalogId, options)
    .then(() => list)
}

/**
 * 领券
 */
export function getCoupon (key, type = 1) {
  const callback = `jQuery${Math.floor(1e7 * Math.random())}`
  return getRequestJson({
    url: 'https://a.jd.com/indexAjax/getCoupon.html',
    params: {
      callback,
      key,
      type,
    }
  }, {
    start: `${callback}(`,
    end: ')'
  })
}

