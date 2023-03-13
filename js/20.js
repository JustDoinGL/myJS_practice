let arr = [1, 2, 3, 5]
let n = 2

function z(arr, n) {
    let c = []
    for (let i = 0; i <= arr.length - n; i++) {
        let chunk = []
        for (let j = i; j < i+ n; j++) {
            chunk.push(arr[j])
        }
        c.push(chunk)
    }
    console.log(c)
}

z(arr, n)