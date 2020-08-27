//初始化观看时间
var watchTime = 0;
//监听content_js发送的事件
chrome.runtime.onMessage.addListener(function (request) {
  console.log(request);
  if (request.begin === true) {
    recordTime = setInterval(function(){
      watchTime++;
      console.log(watchTime);
    }, 1000);
  } else {
    clearInterval(recordTime);
    let NewTime = 0;
    if (window.localStorage.getItem("time")) {
      let recordTime = Number(window.localStorage.getItem("time"));
      NewTime = watchTime + recordTime;
      window.localStorage.setItem("time", NewTime);
      watchTime = 0
    } else {
      NewTime = watchTime;
      // 保存数据
      window.localStorage.setItem("time", NewTime);
      watchTime = 0
    }
  }
});
