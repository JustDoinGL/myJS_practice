document.querySelectorAll('#task17__info').forEach(function q(element) {
    element.onclick = orderFunction
})

function orderFunction() {
    let speed = document.querySelector('.order[value="speed"]')
    let cheap = document.querySelector('.order[value="cheap"]')
    let good = document.querySelector('.order[value="good"]')

    console.log(this)

    if (this.value == 'speed'  && cheap.checked) {
        cheap.checked = false
        return true
    }

    if (this.value == 'speed'  && good.checked) {
        cheap.checked = false
        return true
    }

    if (this.value == 'cheap'  && good.checked) {
        good.checked = false
        return true
    }

    if (this.value == 'cheap'  && good.checked) {
        good.checked = false
        return true
    }

    if (this.value == 'good'  && cheap.checked) {
        cheap.checked = false
        return true
    }
   
}