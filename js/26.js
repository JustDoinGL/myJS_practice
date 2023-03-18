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
    let selectedOption = action.selectedIndex

    if ()

}
