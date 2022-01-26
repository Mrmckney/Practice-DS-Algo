function maxValue(arr){
    return Math.max(...arr)
}

console.log(maxValue(array))

function maxValue(arr){
    alteredArray = arr.sort((a, b) => {return a - b})
    return alteredArray[alteredArray.length - 1]
    
}

console.log(maxValue(array))

function maxValue(arr){
    let largeNum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largeNum){
            largeNum = arr[i]
        } 
    }
    return largeNum
}

console.log(maxValue(array))