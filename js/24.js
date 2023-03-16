// let startTime = 400
// let finichTime = 20000

// const intervalID = setInterval(() => console.log(2), startTime)

// setTimeout(()=> {clearInterval(intervalID)}, finichTime)

let button = document.querySelector('#task24__button')

button.addEventListener('click', outputText)

function outputText() {
     // Объявляем переменные
     let startTime = Number(document.querySelector('#task24__start').value) * 1000
     let finichTime = Number(document.querySelector('#task24__stop').value) * 1000
     let text = document.querySelector('#task24__text').value
     let outputText = document.querySelector('#task24__output')

    // Обнудяем вывод текста
    
        outputText.innerHTML = ""

    // console.log(finichTime)

    if (startTime >= finichTime) {
        outputText.innerHTML = "У Вас ничего не выведится, так как первый интервал меньше или равен второму."
    } else {
        // Cоздаем интревал и выводим данные через таймер 
        const intervalID = setInterval(() => outputText.innerHTML += `${text}, `, startTime)

        // Cоздаем тамаут и останвливаем вывод данных 
        setTimeout(() => { clearInterval(intervalID) 
            outputText.innerHTML += "Вывод закончен."
        }, finichTime)
    }

}