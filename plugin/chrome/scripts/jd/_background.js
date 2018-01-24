
function listen() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.storage.local.set(message)

    if (message.greeting == 'hello') {
      sendResponse({farewell: 'goodbye'})
    } else {
      sendResponse({})
    }
  })
}

export default function () {

  listen()

  chrome.tabs.queryAsync({
    url: 'https://a.jd.com/'
  }).then((tabs) => {
    if (!tabs || !tabs.length) {
      return
    }
    const tab = tabs[0]
    chrome.tabs.sendMessage(tab.id, {test: 1}, (response) => {
      console.log('app resp', response)
    })
  })
}
