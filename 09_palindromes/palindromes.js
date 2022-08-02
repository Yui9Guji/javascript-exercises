const palindromes = function (string) {
    const word = string.toLowerCase()
    const array = word.split('')

    array.forEach(syllable => {
        if (syllable === '!' || syllable === '.'
            || syllable === ',' || syllable === '?'
            || syllable === '&' || syllable === ':'
            || syllable === ' ') {
                array.splice(array.indexOf(syllable), 1)
        }
    })

    array.forEach(syllable => {
        if (syllable === '!' || syllable === '.'
            || syllable === ',' || syllable === '?'
            || syllable === '&' || syllable === ':'
            || syllable === ' ') {
            array.splice(array.indexOf(syllable), 1)
        }
    })

    const middleAnswer = array.join('')
    const reverse = array.reverse()
    const answer = reverse.join('')

    console.log(middleAnswer)
    console.log(answer)

    return answer === middleAnswer;
};
palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
