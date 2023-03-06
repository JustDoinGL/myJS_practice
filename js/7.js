let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let pi = Math.PI
let k = 2 * pi / 100
let x = 0
let timeout

draw()

function draw() {
    let max = Number(document.getElementById('percent').value)
    if (typeof max === 'number' && max >= 0 && max < 101 && x < 101) {
        let color = getColor(x)
        ctx.clearRect(0, 0, 250, 250)

        ctx.beginPath()
        ctx.arc(125, 125, 100, 0, x * k, false)
        ctx.strokeStyle = color
        ctx.lineWidth = 20
        ctx.lineCap = 'round'
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.font = 'bold 70px Arial'
        ctx.fillStyle = color
        ctx.textAlign = 'center'
        ctx.fillText(x + '%', 125, 145)
        ctx.closePath()
        if (x === 100) {
            x = 0
            timeout = setTimeout(draw, 50)
            clearTimeout(timeout)
        }
        if (x > max) {
            x--
            timeout = setTimeout(draw, 50)
        }
        x++
        if (x <= max) {
            timeout = setTimeout(draw, 50)
        }
        else {
            clearTimeout(timeout)
        }
    }
}


function getColor(x) {
    x = x * 255 / 100
    y = 255 - x
    let color = 'rgb(' + x + ',' + y + ',0)'
    return color
}

document.getElementById('percent').onchange = draw