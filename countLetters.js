
const countLetters = function(sentence) {
  let obj = {}
  
  for (let i of sentence) {
    if (i !== ' ')
      obj[i] = obj[i] ? obj[i] + 1 : 1
  }
  return obj
}

module.exports = countLetters
