const keybord = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191]

// document.onkeyup = (event) => {
//     console.log(event.which)
//     keybord.push(event.which)
//     console.log(keybord)
// }

function createKeybord() {
    let out = ''
    for (let i = 0; i < keybord.length; i++) {
        if ( i === 12 || i === 23) {
            out += '<div class="clearfix "></div>'
        }
        out += '<div class="k-key" data="'+keybord[i]+'">' + String.fromCharCode(keybord[i])+'</div>'
    }
    document.getElementById('task15__keybord').innerHTML = out 
}

createKeybord()

document.onkeyup = (event) => {
    // console.log(event.code)
    // console.log(event.keyCode)
    document.querySelectorAll('#task15__keybord .k-key').forEach(element => {
        element.classList.remove('active')
    })
    document.querySelector('#task15__keybord .k-key[data="'+event.keyCode+'"]').classList.add('active')
    setTimeout(() => document.querySelector('#task15__keybord .k-key[data="'+event.keyCode+'"]').classList.remove('active'), 1500)
}

document.querySelectorAll('#task15__keybord .k-key').forEach(element => {
    element.onclick = (event) => {
        document.querySelectorAll('#task15__keybord .k-key').forEach(element => {
            element.classList.remove('active')
        })
        element.classList.add('active')
        setTimeout(() => element.classList.remove('active'), 1500)
    }
})