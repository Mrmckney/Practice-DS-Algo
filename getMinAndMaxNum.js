function getMinAndMaxNum(arr) {
    Array.prototype.sort(arr)
    let res = []
    res.push(arr[arr.length - 1])
    res.push(arr(arr[0]))
    return res
}

console.log(getMinAndMaxNum(array))

function getMinAndMaxNum(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const newArray = [min, max]
    return newArray
}

console.log(getMinAndMaxNum(array))