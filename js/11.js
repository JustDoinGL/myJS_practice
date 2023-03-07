function createAr() {
    let len = Number(document.getElementById('task11__length').value)
    let max = Number(document.getElementById('task11__max').value)
    let min = Number(document.getElementById('task11__min').value)
    let arr = []
    for(let i = 0; i < len; i++) {
        arr.push(Math.round((min + Math.random() * (max - min))))
    }
    document.getElementById('task11__finish').value = arr    
}

createAr()

 document.getElementById('task11__button').onclick = createAr