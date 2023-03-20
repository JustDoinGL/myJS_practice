function GetMoney(money) {
    const nominal = [1000, 500, 100, 50, 10, 1]
    const resalt = []

    if (money > 0) {
        for (let i = 0; i < nominal.length; i++) {
            let note = nominal[i]

            while (money - note >= 0) {
                money -= note
                resalt.push(note)
            }
        }
        return resalt
    } else {
        return "Не валидно"
    }
}

console.log(GetMoney(222))