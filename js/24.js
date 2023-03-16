let startTime = 400
let finichTime = 20000

const intervalID = setInterval(() => console.log(2), startTime)

setTimeout(()=> {clearInterval(intervalID)}, finichTime)