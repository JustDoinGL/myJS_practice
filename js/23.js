let input = document.querySelector('#task23__input')
let send = document.querySelector('#task23__text')
let li = document.querySelector('#task23__li')

send.addEventListener('click', formHadler)

function formHadler(event) {
    event.preventDefault()
    let text = input.value
    let task = document.createElement('li')
    task.innerText = text
    li.append(task)

    console.log(task)

    input.value = ''

}