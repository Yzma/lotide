
const findKeyByValue = function(key, value) {
  if (!key || !value) {
    return undefined
  }
  
  for (let i in key) {
    if (key[i] === value)
      return i
  }
  return undefined
}

module.exports = findKeyByValue
