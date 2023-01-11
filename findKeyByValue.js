

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }
}

const findKeyByValue = function(key, value) {
  if (!key || !value) {
    return undefined
  }
  
  for (let i in key) {
    if (key[i] === value)
      return i
  }
  return undefined
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}
assertEquals(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
assertEquals(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")
assertEquals(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
assertEquals(findKeyByValue(bestTVShowsByGenre, undefined), undefined)
assertEquals(findKeyByValue(bestTVShowsByGenre, "something"), undefined)
assertEquals(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
