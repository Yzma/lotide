
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }
}

const countLetters = function(sentence) {
  let obj = {}
  
  for (let i of sentence) {
    if (i !== ' ')
      obj[i] = obj[i] ? obj[i] + 1 : 1
  }
  return obj
}

console.log(countLetters('lighthouse in the house'))