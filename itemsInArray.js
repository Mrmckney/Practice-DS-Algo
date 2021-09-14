const shoppingList = ['bread', 'eggs', 'milk']
const inCart = ['apples', 'bananas', 'bread']

const newArray = shoppingList.filter(item => !inCart.includes(item))

console.log(newArray)