let word = "listen"
let word2 = "silent"

function isAnagram(a, b) {
    const str1 = a.toLowerCase()
    const str2 = b.toLowerCase()
    const sortStr1 = str1.split('').sort().join('')
    const sortStr2 = str2.split('').sort().join('')
    if(sortStr1 === sortStr2){
        return true
    }
    else {
        return false
    }
    
}

console.log(isAnagram(word, word2))