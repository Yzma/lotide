
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`)
  } else {
    console.log(`🛑Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`)
  }
}

const eqArrays = function(first, second) {
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

const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)

  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }

  for (const i of obj1Keys) {
    if (!Object.hasOwn(obj2, i)) {
      return false
    }

    if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
      if (!eqArrays(obj1[i], obj2[i])) {
        return false
      }
    }

    if (typeof obj1[i] === 'object' && typeof obj2[i] === 'object') {
      return eqObjects(obj1[i], obj2[i])
    } else if (obj1[i] !== obj2[i]) {
      return false
    }
  }
  return true
}

// const shirtObject = { color: "red", size: "medium" }
// const anotherShirtObject = { size: "medium", color: "red" }
// console.log(eqObjects(shirtObject , anotherShirtObject)) // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" }
// console.log(eqObjects(shirtObject , longSleeveShirtObject)) // => false


const shirtObject = { color: "red", size: "medium" }
const anotherShirtObject = { size: "medium", color: "red" }

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" }


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" }
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] }

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }

// Pass
assertObjectsEqual({a: undefined}, {a: undefined})
assertObjectsEqual(shirtObject , anotherShirtObject) // => true
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject) // => true
assertObjectsEqual({a: "a", b: "b"}, {a: "a", b: "b"})
assertObjectsEqual({1: "1", 2: "2"}, {1: "1", 2: "2"})
assertObjectsEqual({a: undefined, b: false}, {a: undefined, b: false})

console.log('--- fail below ---')

// Fail
assertObjectsEqual({a: undefined, b: false}, {c: undefined, b: false})
assertObjectsEqual(shirtObject , longSleeveShirtObject) // => false
assertObjectsEqual({a: "same", b: "same"}, {a: "same", b: "not same"})
assertObjectsEqual({a: "dif1", b: "dif2", not: "undef", same: "yes"}, {a: "dif3", b: "dif4", not1: "undef", same: "yes"})
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject) // => false

// Size - Fail
assertObjectsEqual({a: "a" }, {a: "a", b: "b"})

console.log('--- Recursive ---')

// Recursive
assertObjectsEqual({ a: { z: 1, test: { apple: 1} }, b: 2 }, { a: { z: 1, test: { apple: 1 } }, b: 2 }) // => true

console.log('--- fail ---')
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
