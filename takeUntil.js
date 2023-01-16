
const takeUntil = function(array, callback) {
  let result = []
  for (let item of array) {
    if (callback(item)) {
      break
    } else {
      result.push(item)
    }
  }
  return result
}

module.exports = takeUntil
