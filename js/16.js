document.getElementById('task16__button').onclick = () => {
    let text = document.getElementById('task16__input').value
    let text2 = text.split('').reverse().join('')
    if (document.querySelector('.task16-1 .ddd')) {
        document.querySelector('.task16-1 .ddd').remove()
    }
    if (text === text2) {
        document.querySelector('.task16-1').insertAdjacentHTML('beforeend', '<p class="ddd">Это слово - <span class="black">палиндроном</span></p>');
    } else {
        document.querySelector('.task16-1').insertAdjacentHTML('beforeend', '<p class="ddd">Это слово - <span class="black">не</span> палиндроном</p>');
    }
}