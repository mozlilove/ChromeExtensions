let NewTime =0;
if(window.localStorage.getItem('time')){
  let recordTime = window.localStorage.getItem('time')
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    NewTime = request.time + recordTime
  // 保存数据
  window.localStorage.setItem('time',NewTime)
});
}else{
// 监听首次来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    NewTime = request.time
  // 保存数据
  window.localStorage.setItem('time',NewTime)
});
}

