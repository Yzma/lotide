
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

const flatten = function(object) {
  let newArray = []

  for (let item of object) {
    if (Array.isArray(item)) {
      for (let i of item) {
        newArray.push(i)
      }
    } else {
      newArray.push(item)
    }
  }

  return newArray
}

console.log(assertArrayEquals(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]