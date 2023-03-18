let firstNumber = 2
let secondNumber = 5

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

subtract(firstNumber, secondNumber)
divide(firstNumber, secondNumber)
multiply(firstNumber, secondNumber)
add(firstNumber, secondNumber)


