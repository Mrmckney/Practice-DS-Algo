// Create a function which returns the number of true values there are in an array.

const countArray = [true,false,true,false,true,false,true,true,true,false]

function returnTrue(array) {
  for(let i = 0; i < array.length; i++){
    if(array[i] === true) {
       ++count
    }
  }
  return count
}

console.log(returnTrue(countArray))

const countTrue = r => r.filter(Boolean).length
console.log(countTrue(countArray))