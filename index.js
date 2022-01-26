// const string = 'I love coding'

// const replaceSpacesInString = (str) => {
//     condensedString = str.replace(/\s/g, '')
//     return condensedString
// }

// console.log(replaceSpacesInString(string))

// const num = 50

// const byTen = (num1) => {
//     if(num1 % 10 === 0){
//         return true
//     }
//     return false
// }

// console.log(byTen(num))

// const byTen = (num1) => {
//     return num1 % 10 === 0 ? true : false
// }

// console.log(byTen(num))

// function oddNums() {
//     for(let i = 0; i <= 100; i++){
//         if(i % 2 === 1){
//             console.log(i)
//         }
//     }
// }

// oddNums()

let person = [
    {
        name: 'Emily',
        graduated: true,
        hired: 'Yes'
    },
    {
        name: 'Matt',
        graduated: true,
        hired: 'No'
    },
    {
        name: 'Damion',
        graduated: false,
        hired: 'No'
    }
]

// function getAllGrads(arr) {
//     let graduatedStudents = []
//     arr.map(singlePerson => {
//         if(singlePerson.graduated === true){
//             graduatedStudents.push(singlePerson.name)
//         }
//     })
//     return graduatedStudents
// }

// console.log(getAllGrads(person))

// given an array 3 numbers add to target

// const array = [1, 2, 3, 20, 15]
// const target = 20

// function threeSum(arr, tar){
//     let targ = 0
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; i < arr.length; i++){
//             for(let x = j + 1; i < arr.length; i++){
//                 targ = arr[i] + arr[j] + arr[x]
//                 if(targ === tar){
//                     return [arr[i], arr[j], arr[x]]
//                 }
//             }
//         }
//     }
// }

// console.log(threeSum(array,target))

// const a = [10, 2, 3, 20, 17]
// const b = 47

// function twoSum(arr,tar){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] + arr[j] === tar){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// console.log(twoSum(a,b))

// function threeSum(arr,tar) {
//     let target = 0
//     for(let i = 0; i < arr.length;){
//     }
    
// }

// console.log(threeSum(a,b))



// const object = {
//     name: "Matt",
//     age: 19,
//     graduated: true
// }

// const object1 = {
//     name: "Dog",
//     age: 7,
//     weight: 25
// }



// function compareObject(a, b) {
//     let key1 = Object.keys(a)
//     let key2 = Object.keys(b)
//         if(key1 !== key2){
//             return false
//         } 
//         else {
//             return true
//         }
// }
// console.log(compareObject(object, object1))

function fibonacci(num) {
    const result = [0, 1]
    for (let i = 2; i <= num; i++){
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }
    return result
}

console.log(fibonacci(10))