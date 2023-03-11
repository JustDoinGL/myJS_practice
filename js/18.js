const words = ['super', 'blin', 'nine', 'flex']

document.querySelector('#task18__button').onclick = () => {
    let text = document.querySelector('#task18-getText').value
    for (let i = 0; i < words.length; i++) {
        while (text.indexOf(words[i]) != -1) {
            text = text.replace(words[i], star(words[i].length))
        }
    }
    document.querySelector('#task18-text').innerHTML += '<div>' + text + '</div>'
}

function star(n) {
    let out = ''
    for (let i = 0; i < n; i++) {
        out += '*'
    }
    return out
}