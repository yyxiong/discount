
export default function () {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 保存券信息
    chrome.storage.local.set(message)

    // chrome.storage.local.get('coupons', (a) => {
    //   console.info('get store', a)
    // })
    if (message.greeting == 'hello') {
      sendResponse({farewell: 'goodbye'})
    } else {
      sendResponse({})
    }
  })

  chrome.tabs.queryAsync({
    // active: true
    url: 'https://a.jd.com/'
  }).then((tabs) => {
    if (!tabs || !tabs.length) {
      return
    }
    const tab = tabs[0]
    console.info(tab)

    chrome.tabs.sendMessage(tab.id, {test: 1}, (response) => {
      console.log('app resp', response)
    })
  })
}
