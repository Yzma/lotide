
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

const map = function(array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

const words = ["ground", "control", "to", "major", "tom"]

const results1 = map(words, word => word[0])
console.log(assertArrayEquals(results1, [ 'g', 'c', 't', 'm', 't' ]))