// let firstNumber = 2
// let secondNumber = 5

// // функция умножения
// function multiply(firstNumber, secondNumber) {
//     return firstNumber * secondNumber
// }

// // функция сложения
// function add(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// // функция деления
// function divide(firstNumber, secondNumber) {
//     if (secondNumber === 0) {
//         return "Делить на 0 нельзя"
//     } else {
//         return firstNumber / secondNumber
//     }
// }

// // функция вычетания
// function subtract(firstNumber, secondNumber) {
//     return firstNumber - secondNumber
// }

// subtract(firstNumber, secondNumber)
// divide(firstNumber, secondNumber)
// multiply(firstNumber, secondNumber)
// add(firstNumber, secondNumber)

const actionButton = document.querySelector('#task26__button')

actionButton.addEventListener('click', getValue)

function getValue() {
    //Объявляем переменные
    const firstNumber = Number(document.querySelector('#task26__1number').value)
    const secondNumber = Number(document.querySelector('#task26__2number').value)
    const action = document.querySelector('#task26__action')
    const selectedOption = action.selectedIndex
    const text = document.querySelector('#task26__span')

    // Обнуляем место для вывода ответа
    text.innerHTML = ''

    // Проверям, какое действие делать по index
    if (selectedOption === 0) {
        const total = multiply(firstNumber, secondNumber)
        text.innerHTML = total
    } else if (selectedOption === 1) {
        const total = add(firstNumber, secondNumber)
        text.innerHTML = total
    } else if (selectedOption === 2) {
        const total = divide(firstNumber, secondNumber)
        text.innerHTML = total
    } else if (selectedOption === 3) {
        const total = subtract(firstNumber, secondNumber)
        text.innerHTML = total
    } else if (selectedOption === 4) {
        const total = divideNoMod(firstNumber, secondNumber)
        text.innerHTML = total
    } else if (selectedOption === 5) {
        const total = divideNoMod(firstNumber, secondNumber)
        text.innerHTML = total
    } else {
        const total = module(firstNumber, secondNumber)
        text.innerHTML = total
    }
}

// функция умножения
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

// функция сложения
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

// функция деления
function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Делить на 0 нельзя"
    } else {
        return firstNumber / secondNumber
    }
}

// функция вычетания
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

// функция деления без остатка
function divideMod(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Делить на 0 нельзя"
    } else {
        return Math.floor(firstNumber / secondNumber)
    }
}

// функция деления с остатком
function divideNoMod(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Делить на 0 нельзя"
    } else {
        return firstNumber % secondNumber
    }
}

// функция деления с модуль
function module(firstNumber, secondNumber) {
    return `${Math.abs(firstNumber)}, ${Math.abs(secondNumber)}`
}


