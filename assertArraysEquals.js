const eqArrays = require('./eqArrays')

const assertArrayEquals = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`✅ Assertion Passed: [${first}] === [${second}]`)
  } else {
    console.log(`🛑Assertion Failed: [${first}] !== [${second}]`)
  }
}

module.exports = assertArrayEquals
