const array = [2, 7, 3, 8, 10]
const array2 = [4, 11]
const array3 = [2, 7, 3, 8, 10]
const array4 = [0, 11]


function isNestedArray(arr1, arr2) {
    if(Math.min(...arr2) < Math.min(...arr1) 
        && Math.max(...arr1) < Math.max(...arr2)
    ){
        return true
    } else {
        return false
    }
}

console.log(isNestedArray(array, array2))
console.log(isNestedArray(array3, array4))