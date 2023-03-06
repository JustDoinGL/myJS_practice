document.getElementById('modal-window-button').onclick = () => {
    let text = document.getElementById('modal-window-text').value
    let chips = document.createElement('div')
    chips.classList.add('chips')
    chips.innerHTML = text

    if (!document.querySelector('#chips-field')) {
        let chipsField = document.createElement('div')
        chipsField.id = 'chips-field'
        document.body.appendChild(chipsField)
    }
    document.querySelector('#chips-field').appendChild(chips)
    setTimeout(() => {
        chips.remove()
        removeFiled()
    }, 4000)
}

function removeFiled() {
    let chips = document.querySelector('#chips-field .chips')
    if (chips === null) {
        document.querySelector('#chips-field').remove()
    }
}
