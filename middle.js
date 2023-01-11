const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }
}

const assertArrayEquals = function(first, second) {
  if (first.length !== second.length) {
    return false
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false
    }
  }
  return true
}

const middle = function(array) {
  if (array.length <= 2) {
    return []
  }

  if (array.length % 2 === 0) { // Even
    return [array[Math.floor(array.length / 2) - 1], array[Math.ceil(array.length / 2)]]
  } else { // Odd
    return [array[Math.ceil((array.length / 2) - 1)]]
  }
}

console.log(assertArrayEquals(middle([1, 2, 3]), [2])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 8])) // => [4]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]