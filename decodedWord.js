const codedWord = 'UcUNFYGoFYFYGdNUHiTYSng TiTHGFs SHDHfASHuTHEn'

function decodedWord(word) {
    const newWord = word.replace(/[A-Z]/g, '')
    return newWord
}

console.log(decodedWord(codedWord))