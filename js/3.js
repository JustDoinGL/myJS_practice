function userProgress(time) {
    let start = 0
    time = time * 10
    let progressElement = document.getElementById('task3__progress')
    setInterval(function() {
        if (start < 101) {
            progressElement.value = start
            console.log(start)
        }
        start++
        if (start === 100) {
            document.querySelector('.finich').style.display = "block"
        }
    }, time)
}

document.onclick = function(event) {
    if (event.target.tagName === "BUTTON") {
        document.querySelector('.finich').style.display = "none"
        userProgress(3)
    }
}
