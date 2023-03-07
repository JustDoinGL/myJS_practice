document.querySelector('#menu-button').onclick = menu

menu()

function menu() {
    let check = document.getElementsByClassName('menu')
    let kkal = 0
    let cost = 0
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            kkal += parseFloat(check[i].getAttribute('data-kkal'))
            cost += parseFloat(check[i].getAttribute('data-cost'))
        }
    }
    document.getElementById('menu-cost').innerHTML = kkal
    document.getElementById('menu-kkal').innerHTML = cost
}