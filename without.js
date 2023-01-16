
const without = function(array, toRemove) {
  const newArray = []

  for (let item of array) {
    if (!toRemove.includes(item)) {
      newArray.push(item)
    }
  }
  return newArray
}

module.exports = without
