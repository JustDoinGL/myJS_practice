let randomNumber = Math.floor((Math.random() * 10) + 1)
// console.log(randomNumber)

document.getElementById('task19__button').onclick = () => {
    let number = Number(document.getElementById('task19__input').value)
    let out = document.getElementById('task19__out')
    // console.log(number)
    if ((number > 10) || (number < 0)) {
        out.innerHTML = 'Вы вели число, которое не соотвествует условию'
    }
    else {
        if (number === randomNumber) {
            out.innerHTML = 'Вы угадали число!'
        } else if (number > randomNumber) {
            out.innerHTML = 'Вы ввели число больше загаданного'
        } else {
            out.innerHTML = 'Вы ввели число меньше загаданного'
        }
    }
}