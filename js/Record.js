let time =0;
// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    time += request.time
  // 保存数据
  window.localStorage.setItem('time',time)
});
