const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
      if(vowels.includes(char)) {
        count++
      }
    }
    return count
}

const findVowels = str => {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matches.length : 0
}