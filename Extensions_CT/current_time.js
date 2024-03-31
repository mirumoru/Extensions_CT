function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 0埋めする
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // フォーマットして表示
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("current-time").innerHTML = timeString;
}

// 1秒ごとに更新
setInterval(getCurrentTime, 1000);

