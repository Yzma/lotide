
const middle = function(array) {
  if (array.length <= 2) {
    return []
  }

  if (array.length % 2 === 0) { // Even
    return [array[Math.floor(array.length / 2) - 1], array[Math.ceil(array.length / 2)]]
  } else { // Odd
    return [array[Math.ceil((array.length / 2) - 1)]]
  }
}

module.exports = middle
