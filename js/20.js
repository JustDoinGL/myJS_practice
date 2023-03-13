document.getElementById('task20__button').onclick = () => {
    let c = []
    let arr = document.getElementById('task20__arr').value
    arr = arr.split(' ')
    let n = Number(document.getElementById('task20__number').value)

    for (let i = 0; i <= arr.length - n; i++) {
        let chunk = []
        for (let j = i; j < i + n; j++) {
            chunk.push(arr[j])
        }
        c.push(chunk)
    }
    // console.log(c[0].length)
    let text = ''
    for (let i = 0; i < c.length; i++) {
        text += ' {'
        for (let j = 0; j < c[i].length; j++) {
            if (j !== c[i].length - 1) {
                text += `${c[i][j]}, `
            } else {
                text += `${c[i][j]}`
            }
        }
        text += '}'
    }
    if (text !== '') {
        document.getElementById('task20__resalt').value = text
    } else {
        document.getElementById('task20__resalt').value = "Вы ввели число, которое прывышает размер массива."
    }
}

