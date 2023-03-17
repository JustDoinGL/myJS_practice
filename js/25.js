let button2 = document.querySelector('#task25__button')
const text = document.querySelector('#task25__span')

button2.addEventListener('click', pow)

function pow() {
    let c = 1
    let arr1 = []
    const arr = document.querySelector('#task25__arr').value
    let z = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            arr1.push((Number(z)))
            z = ''
        } else if (i+1 === arr.length) {
            z += arr[i]
            arr1.push((Number(z)))
        } else {
            z += arr[i]
        }
    }
    console.log(arr1)
    arr1.forEach((el) => c *= el )
    text.innerHTML = c
}