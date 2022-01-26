const array = [5, -5, 6, -1, 1, -6, 9]

function addSumOfArray(arr) {
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i]
    }
    return total
}

console.log(addSumOfArray(array))