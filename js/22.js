document.getElementById('task22__button').onclick = () => {
    let a = document.getElementById('task22__article').value
    let b = document.getElementById('task22__change').value
    if (a === '') {
        document.getElementById('task22__output').innerHTML = 'Вы не ввели предложение'
    } else if (b === '') {
        document.getElementById('task22__output').innerHTML = 'Вы не ввели слово на котрое заменить предложение'
    } else if (b === '' && a === '') {
        document.getElementById('task22__output').innerHTML = 'У вас пустое слово и предложение'
    } else {
        out = a.split(' ').map(el => b).join(' ')
        document.getElementById('task22__output').innerHTML = out
    }
}






// function n() {
//     let a = "a s c v"
//     let b = 's'
//     z = a.split(' ').map(el => b).join(' ')
//     console.log(z)
// }

// n()