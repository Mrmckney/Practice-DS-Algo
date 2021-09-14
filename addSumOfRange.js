// function to add every number before the number

function addUp(num) {
    let total = 0
    for(let i = 1; i <= num; i++){
        total = total + i
    }
    return total
}

console.log(addUp(12))