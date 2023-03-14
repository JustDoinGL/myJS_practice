document.getElementById('task21__button').onclick = () => {
    let n1 = Number(document.getElementById('task21__firstNumber').value)
    let n2 = Number(document.getElementById('task21__secondNumber').value)
    let allNumbers = []
    if (n1 >= n2-1) {
        document.getElementById('task21__output').innerHTML = 'Вы ввели склом маленькое чвторое число.'
    } else {   
    for (let i = n1+1; i < n2; i++) {
        allNumbers.push(i)
    }
    document.getElementById('task21__output').innerText = allNumbers
    }
}

