import _ from 'lodash'
import axios from 'axios/dist/axios'

function jsonParse (str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    return {}
  }
}

export function jdCheck(data, attr) {
  if (!data || data.resultCode !== '200') {
    throw new Error(data && data.message || '异常')
  }
  return attr ? data[attr] : data
}

export function getRequestJson (options, wrapper) {
  if (!wrapper) {
    return axios(options)
  }

  return axios(options)
  .then((resp) => resp.data)
  .then((body) => {
    let text = body
    if (_.isString(wrapper)) {
      text = _.trimStart(text, wrapper)
      return jsonParse(text)
    }

    if (_.isObject(wrapper)) {
      if (wrapper.start) {
        text = _.trimStart(body, wrapper.start)
      }
      if (wrapper.start) {
        text = _.trimEnd(text, wrapper.end)
      }
      return jsonParse(text)
    }
  })
}
