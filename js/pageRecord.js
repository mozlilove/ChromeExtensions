const TV_NAME1 = Symbol.for("www.huya.com");
const TV_NAME2 = Symbol.for("m.huya.com");
const TV_NAME3 = Symbol.for("www.douyu.com");
const TV_NAME4 = Symbol.for("m.douyu.com");
const TV_NAME5 = Symbol.for("m.huya.com");
const TV_NAME6 = Symbol.for("www.egame.qq.com");
const TV_NAME7 = Symbol.for("m.egame.qq.com");
const TV_NAME8 = Symbol.for("live.bilibili.com");

let urlSet = new Set()

urlSet.add(TV_NAME1)
.add(TV_NAME2)
.add(TV_NAME3)
.add(TV_NAME4)
.add(TV_NAME5)
.add(TV_NAME6)
.add(TV_NAME7)
.add(TV_NAME8)

var watchTime = 0

window.onload = () => {
   urlSet.forEach(value => {
    if (Symbol.keyFor(value) === location.hostname) {
        recordTime()
    }else{
        return
    }
   })
}

window.onbeforeunload = () => {
    urlSet.forEach(value => {
        if (Symbol.keyFor(value) === location.hostname) {
            clearInterval()
            chrome.runtime.sendMessage({time:watchTime}, function(response) {
                console.log('收到来自后台的回复：' + response);
            });
            watchTime = 0;
        }else{
            return
        }
    })
}

recordTime = () => {
    setInterval(() => {
        watchTime += 1
        console.log(watchTime);
    },1000)
}
