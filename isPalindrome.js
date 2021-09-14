function isPalindrome(word) {
    const condensedWord = word.replace(/[\s,;.]/g, '')
    const startingWord = condensedWord.toLowerCase().split('') 
    const reversedWord = condensedWord.toLowerCase().split('').reverse() 
    if(JSON.stringify(reversedWord) === JSON.stringify(startingWord)){
        return 'Is a Palindrome'
    } else {
        return 'Is not Palindrome'
    }
}

console.log(isPalindrome('A man, a plan, a canal; Panama.'))

const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparisong
    return str === str.split('').reverse().join('')
}

function isPalindrome(str) {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}