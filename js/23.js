let input = document.querySelector('#task23__input')
let send = document.querySelector('#task23__text')
let li = document.querySelector('#task23__li')
let form = document.querySelector('#task23__form')


send.addEventListener('click', formHadler)

function formHadler() {
    let text = input.value

    if (text) {
        // Удалем p
        if (li.querySelector('p')) {
            let p = li.querySelector('p')
            li.removeChild(p)
        }

        // Создаем элемент ли
        let task = document.createElement('li')
        task.innerText = text
        li.append(task)

        // Создаем кнопку дилит, стили дла нее и добавляем в li
        let deleteButton = document.createElement('button')
        deleteButton.setAttribute('role', 'button')
        deleteButton.innerText = "Удалить"
        deleteButton.style['margin-left'] = '15px'
        task.append(deleteButton)

        // Вешаем листенер по нажатию
        deleteButton.addEventListener('click', function () {
            this.closest('li').remove()
        })

        // Обнуляем поле ввода
        input.value = ''
    } else if (!li.querySelector('p')) {
        let info = document.createElement('p')
        info.innerText = "Ваша задача пуста, введите хотя бы один символ"
        li.append(info)
    }

}