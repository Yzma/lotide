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

    // console.log('i:', i)
    // console.log('obj1[i]', obj1[i])
    // console.log('obj2[i]', obj2[i])
    // console.log('obj2.i', obj2.i)
    // console.log('hasOwnProperty', Object.hasOwn(obj2, i))
    // console.log('')

    if (!Object.hasOwn(obj2, i)) {
      return false
    }

    // If obj2 has the key, check the values
    if (obj1[i] !== obj2[i]) {
      if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
        if (!eqArrays(obj1[i], obj2[i])) {
          return false
        }
      } else {
        // console.log('2 --- False here ---')
        return false
      }
    }

  }
  return true
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`)
  } else {
    console.log(`🛑Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`)
  }
}

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

// Fail
assertObjectsEqual({a: undefined, b: false}, {c: undefined, b: false})
assertObjectsEqual(shirtObject , longSleeveShirtObject) // => false
assertObjectsEqual({a: "same", b: "same"}, {a: "same", b: "not same"})
assertObjectsEqual({a: "dif1", b: "dif2", not: "undef", same: "yes"}, {a: "dif3", b: "dif4", not1: "undef", same: "yes"})
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject) // => false

// Size - Fail
assertObjectsEqual({a: "a" }, {a: "a", b: "b"})
