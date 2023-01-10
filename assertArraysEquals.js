
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

console.log(assertArrayEquals([1, 2, 3], [1, 2, 3], true)) // => true
console.log(assertArrayEquals([1, 2, 3], [3, 2, 1], false)) // => false
