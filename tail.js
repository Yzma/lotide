
const tail = function(array) {
  if (!array || array.length === 1) {
    return []
  }

  let newArray = []
  for (let i = 1; i <= array.length - 1; i++) {
    newArray[i - 1] = array[i]
  }
  return newArray
}

module.exports = tail
