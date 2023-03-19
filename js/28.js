const evr = document.querySelector('#task28-evro')
const dollar = document.querySelector('#task28-dollar')



async function getCurs() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url)
    const data = await response.json()
    const usdData = data.Valute.USD.Value.toFixed(2)
    const eurData = data.Valute.EUR.Value.toFixed(2)
    evr.innerHTML = usdData
    dollar.innerHTML = eurData
}

getCurs()