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

window.onload = function(){
   urlSet.forEach(function(value){
    if (Symbol.keyFor(value) === location.hostname && typeof chrome.app.isInstalled!=="undefined") {
        chrome.runtime.sendMessage({begin:true},function(response) {
            console.log(response);
        })
    }else{
        return
    }
   })
}

window.onbeforeunload = function(){
    urlSet.forEach(function(value){
        if (Symbol.keyFor(value) === location.hostname && typeof chrome.app.isInstalled!=="undefined") {
            chrome.runtime.sendMessage({begin:false}, function(response) {
                console.log(response);
            });
        }else{
            return
        }
    })
}
window.onunload = function(){
    urlSet.forEach(function(value){
        if (Symbol.keyFor(value) === location.hostname && typeof chrome.app.isInstalled!=="undefined") {
            chrome.runtime.sendMessage({begin:false}, function(response) {
                console.log(response);
            });
        }else{
            return
        }
    })
}
