
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
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

    // console.log('i:', i)
    // console.log('obj1[i]', obj1[i])
    // console.log('obj2[i]', obj2[i])
    // console.log('obj2[i]', obj2.i)
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

const shirtObject = { color: "red", size: "medium" }
const anotherShirtObject = { size: "medium", color: "red" }
console.log(eqObjects(shirtObject , anotherShirtObject)) // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" }
console.log(eqObjects(shirtObject , longSleeveShirtObject)) // => false