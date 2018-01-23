// 京东根据 cookie中的thor判断登陆状态
exports.isLogin = () => {
  return chrome.cookies.getAllAsync({
    domain: '.jd.com',
    name: 'thor'
  }).then((cookies) => {
    const [cookie, ...others] = cookies
    return cookie && !!cookie.value
  })
}
