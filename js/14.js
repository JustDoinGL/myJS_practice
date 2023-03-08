const animal = ['cat', 'dog', 'jiraf', 'volk']
let infoImg = document.querySelectorAll('.cover')

function random(max) {
    return  Math.floor(Math.random() * max)
}

infoImg.forEach((element) => {
    // console.log(element)
    let randomNum = random(img.length - 1)
    element.style.backgroundImage = 'url(img/' + animal[randomNum] + '.jpg) '
    element.style.backgroundSize = 'cover'
    element.style.cursor = 'pointer'
    element.dataset.data = randomNum
    element.onclick = changeImg 
})

function changeImg() {
    document.getElementById('task14-h1').innerHTML = ''
    let data = this.dataset.data
    if (+data+1 < animal.length) {
        data++
    } else {
        data = 0
    }
    this.dataset.data = data
    this.style.backgroundImage = 'url(img/' + animal[data] + '.jpg) '
    this.style.backgroundSize = 'cover'
    this.style.cursor = 'pointer'
    winCombination()
}


function winCombination() {
    let res = []
    infoImg.forEach((element) => res.push(element.dataset.data))
    if (res.join('') === '0000') {
        document.getElementById('task14-h1').innerHTML = 'U win'
    }
    if (res.join('') === '1111') {
        document.getElementById('task14-h1').innerHTML = 'U win'
    }
    if (res.join('') === '2222') {
        document.getElementById('task14-h1').innerHTML = 'U win'
    }
    if (res.join('') === '3333') {
        document.getElementById('task14-h1').innerHTML = 'U win'
    }
}

