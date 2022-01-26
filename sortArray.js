const array = [10, 2, 3, 27, 7]

const sortArray = (arr) => {
    sortedArray = arr.sort((a, b) => a - b)
    return sortedArray
}

console.log(sortArray(array))