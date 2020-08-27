if(window.localStorage.getItem('time')){
    let time =  window.localStorage.getItem('time')
    let displayTime =''
    if(time < 60){
        displayTime = time + '秒'
    }else if(time >= 60 && time < 3600){
        displayTime = parseInt(time/60)  +'分'+time%60+'秒'
    }else if(time >= 3600 && time < 86400){
        displayTime = parseInt(time/3600) + '小时' + parseInt((time%3600)/60) +'分' + time%60 +'秒'
    }else if(time >= 86400){
        displayTime = parseInt(time/86400) +'天' + parseInt((time%86400)/3600) + '小时' + parseInt((time%3600)/60) + '分' + time%60 + '秒'
    }
    document.getElementById('time').innerText = displayTime   
}else{
    console.log("not have data");
}