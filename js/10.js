function timeGet() {
    let startdate = document.getElementById('task10__date__start').value
    let finichdate = document.getElementById('task10__date__finish').value
    let time = document.getElementById('task10__date__value').value
    switch (time) {
        case 'option1':
            document.getElementById('task10__date__span').innerHTML = `${(Date.parse(finichdate) - Date.parse(startdate))} милисекундах `
            break;
        case 'option2':
            document.getElementById('task10__date__span').innerHTML = `${(Date.parse(finichdate) - Date.parse(startdate))/100} секундах`
            break;
        case 'option3':
            document.getElementById('task10__date__span').innerHTML = `${(Date.parse(finichdate) - Date.parse(startdate))/60000} минутах `
            break;
        case 'option4':
            document.getElementById('task10__date__span').innerHTML = `${(Date.parse(finichdate) - Date.parse(startdate))/3600000} часах`
            break;
        case 'option5':
            document.getElementById('task10__date__span').innerHTML = `${(Date.parse(finichdate) - Date.parse(startdate))/86400000} днях`
            break;
        case 'option6':
            document.getElementById('task10__date__span').innerHTML = `${(Date.parse(finichdate) - Date.parse(startdate))/31536000000} годах` 
            break;

        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}

timeGet()

document.getElementById('task10__date__button').onclick = timeGet