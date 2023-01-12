
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


const assertArrayEquals = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`✅ Assertion Passed: [${first}] === [${second}]`)
  } else {
    console.log(`🛑Assertion Failed: [${first}] !== [${second}]`)
  }
}

assertArrayEquals([1, 2, 3], [1, 2, 3], true) // => true
assertArrayEquals([1, 2, 3], [3, 2, 1], false) // => false
