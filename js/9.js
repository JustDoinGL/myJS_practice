let img = document.querySelectorAll('.img-task-7 img')
let curent = 0

function sliderback() {
    curent--
    if (curent < 0) {
        curent = 3
        img[curent].classList.add('opacity')
        img[0].classList.remove('opacity')
    } else {
        img[curent].classList.add('opacity')
        img[curent + 1].classList.remove('opacity')
    }
}


function sliderforward() {
    curent++
    if (curent > 3) {
        curent = 0
        img[curent].classList.add('opacity')
        img[3].classList.remove('opacity')
    } else {
        img[curent].classList.add('opacity')
        img[curent - 1].classList.remove('opacity')
    }
}




document.getElementById('slider-img-goback').onclick = sliderback
document.getElementById('slider-img-goforward').onclick = sliderforward