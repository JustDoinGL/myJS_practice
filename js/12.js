document.getElementById('task12__input').oninput = () => {
    let text = document.getElementById('task12__input').value.trim()
    let info = document.querySelectorAll('#task12__ul li')
    if (text != '') {
        info.forEach((elem) => {
            if (elem.innerHTML.search(text) === -1) {
                elem.classList.add('hide')
            }
            else {
                elem.classList.remove('hide')
            }
        })
    }
    else {
        info.forEach((elem) => {
                elem.classList.remove('hide')
            })
    }
}