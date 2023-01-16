
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`)
  } else {
    console.log(`🛑Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`)
  }
}

module.exports = assertObjectsEqual

// const shirtObject = { color: "red", size: "medium" }
// const anotherShirtObject = { size: "medium", color: "red" }

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" }


// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" }
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] }

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }

// // Pass
// assertObjectsEqual({a: undefined}, {a: undefined})
// assertObjectsEqual(shirtObject , anotherShirtObject) // => true
// assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject) // => true
// assertObjectsEqual({a: "a", b: "b"}, {a: "a", b: "b"})
// assertObjectsEqual({1: "1", 2: "2"}, {1: "1", 2: "2"})
// assertObjectsEqual({a: undefined, b: false}, {a: undefined, b: false})

// // Fail
// assertObjectsEqual({a: undefined, b: false}, {c: undefined, b: false})
// assertObjectsEqual(shirtObject , longSleeveShirtObject) // => false
// assertObjectsEqual({a: "same", b: "same"}, {a: "same", b: "not same"})
// assertObjectsEqual({a: "dif1", b: "dif2", not: "undef", same: "yes"}, {a: "dif3", b: "dif4", not1: "undef", same: "yes"})
// assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject) // => false

// // Size - Fail
// assertObjectsEqual({a: "a" }, {a: "a", b: "b"})
