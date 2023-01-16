
const findKey = function(key, callback) {
  for (let i in key) {
    if (callback(key[i])) {
      return i
    }
  }
  return null
}

module.exports = findKey