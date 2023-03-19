const startButton = document.querySelector('#task27__start')
const pauseButton = document.querySelector('#task27__pause')
const resetButton = document.querySelector('#task27__reset')
let startTime;

// Start
startButton.onclick = () => {
    clearTimeout(startTime)
    let getTime = Number(document.querySelector('#task27__time').innerHTML)
    startTime = setInterval(() => {
        getTime++
        document.querySelector('#task27__time').innerHTML = getTime
    }, 1000)
}

// Pause
pauseButton.onclick = () => clearTimeout(startTime)


// Reset
resetButton.onclick = () => {
    clearTimeout(startTime)
    document.querySelector('#task27__time').innerHTML = 0
}
