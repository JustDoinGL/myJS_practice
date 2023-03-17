let button2 = document.querySelector('#task25__button')
const text = document.querySelector('#task25__span')

button2.addEventListener('click', pow)

function pow() {
    text.innerHTML = ''
    let arr1 = []
    const arr = document.querySelector('#task25__arr').value
    let z = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            arr1.push((Number(z)))
            z = ''
        } else if (i + 1 === arr.length) {
            z += arr[i]
            arr1.push((Number(z)))
        } else {
            z += arr[i]
        }
    }
    let q = pow2(arr1)
    if (isNaN(q)) {
        text.innerHTML = 'Вы ввели не только одни цифры, умножение невозможно'
    } else {
        text.innerHTML = q
    }
}

function pow2(arr1) {
    let c = 1
    arr1.forEach(element => {
        if (typeof element === 'Null' ) {
            c = 'Вы ввели не только одни цифры, умножение невозможно'
            return c
        } else {
            c *= element
        }
        console.log(element)
    });
    return c
}