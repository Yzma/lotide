
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

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }
}

const without = function(array, toRemove) {
  const newArray = []

  for (let item of array) {
    if (!toRemove.includes(item)) {
      newArray.push(item)
    }
  }
  return newArray
}

console.log(assertArrayEquals(without([1, 2, 3], [3]), [1, 2])) // => true
console.log(assertArrayEquals(without([1, 2, 3], [2, 1]), [3])) // => false
