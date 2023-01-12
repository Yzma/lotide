
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }
}

const eqArrays = function(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return false
  }

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

assertEquals(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEquals(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEquals(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEquals(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false