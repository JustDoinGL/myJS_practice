document.getElementById('cipher').onclick = function () {
    let number = document.getElementById('cipher-number').value
    let text = document.getElementById('cipher-start').value
    if (text.length < 1) {
        document.getElementById('cipher-finish').innerText = "Необходимы символы для шифра!"
    } else {
        let l = []
        let cost = 0
        for (let i = 0; i < text.length; i++) {
            cost = Number(number) + Number(text.charCodeAt(i))
            l.push(cost)
        }
        let finish = ''
        for (let i = 0; i < l.length; i++) {
            finish += String.fromCharCode(l[i])
        }
        document.getElementById('cipher-finish').innerText = finish
    }
}
