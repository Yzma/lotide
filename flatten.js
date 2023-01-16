
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

module.exports = flatten