// class cutNum {
//     constructor(num) {
//         document.getElementById('split-number-f').innerHTML = `еденицы: ${num % 10} десятки: ${Math.floor(num / 10 % 10)} сотни: ${Math.floor(num / 100)}`
//     }
// }

// document.getElementById('split-number').onchange = new cutNum(Number(document.getElementById('split-number').value))

function splitNumber() {
    let num = Number(document.getElementById('split-number').value)
    document.getElementById('split-number-f').innerHTML = `сотни: ${Math.floor(num / 100)}  десятки: ${Math.floor(num / 10 % 10)} еденицы: ${num % 10}`
}

splitNumber()

document.getElementById('split-number').onchange = splitNumber

