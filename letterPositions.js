
const letterPositions = function(sentence) {
  let obj = {}
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (obj[sentence[i]]) {
        obj[sentence[i]].push(i)
      } else {
        obj[sentence[i]] = [i]
      }
    }
  }

  return obj
}

console.log(letterPositions("lighthouse in the house"))