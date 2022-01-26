const array1 = [1, 2, 3]
const array2 = [2, 3, 4]

function addTwoNums(n1, n2){
    arr1 = +n1.join('')
    arr2 = +n2.join('')
    answer = arr1 + arr2
    return answer
}

function addTwoNums(n1, n2){
    number = +n1.join('') + +n2.join('')
    target = number.toString()
    return target.split('')
}

console.log(addTwoNums(array1, array2))