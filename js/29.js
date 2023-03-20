let Gettext = document.querySelector('#task29__outMoney')
const getNumber = document.querySelector('#task29__money')

getNumber.addEventListener('change', GetMoney)

function GetMoney() {
    const nominal = [1000, 500, 100, 50, 10, 1]
    const resalt = []
    let money = Number(getNumber.value)
    Gettext.innerHTML = ''

    if (money > 0) {
        for (let i = 0; i < nominal.length; i++) {
            let note = nominal[i]
            let cost = 0
            if (money - note >= 0) {
                while (money - note >= 0) {
                    money -= note
                    cost++
                }
                resalt.push(` ${cost} по ${note} купюр`)
            }
        }
        Gettext.innerHTML = resalt
    } else {
        Gettext.innerHTML = "Не валидно"
    }
}

console.log(GetMoney(222))