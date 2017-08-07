
function ntw (num) {
  let result = ''
  let words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  let numLetters = num.toString().split('')
  if (numLetters.length == 3) {
    if (num === 100) {
      return `seratus`
    } else if (numLetters[0] == '1') {
      return `seratus ${words[parseInt(numLetters[1])]} puluh ${words[parseInt(numLetters[2])]}`.trim()
    }
    return `${words[parseInt(numLetters[0])]} ratus ${words[parseInt(numLetters[1])]} puluh ${words[parseInt(numLetters[2])]}`.trim()
  } else if (numLetters.length == 2) {
    if (num === 11) {
      return 'sebelas'
    } else if (numLetters[0] == '1') {
      return `${words[parseInt(numLetters[1])]} belas`.trim()
    }
    return `${words[parseInt(numLetters[0])]} puluh ${words[parseInt(numLetters[1])]}`.trim()
  } else if (numLetters.length == 1) {
    return `${words[parseInt(numLetters[0])]}`.trim()
  }
}

module.exports = ntw;
