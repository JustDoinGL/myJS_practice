const button31 = document.querySelector('#task31__button')
const p = document.querySelector('#task31__p')

const pickColor = async () => {
    const eyeDropper = new EyeDropper()
    const { sRGBHex } = await eyeDropper.open()
    p.innerHTML = sRGBHex
}

button31.addEventListener('click', pickColor)