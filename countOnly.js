
const countOnly = function(allItems, itemsToCount) {
  let obj = {}
  
  for (let i of allItems) {
    for (let j in itemsToCount) {
      if (i === j && itemsToCount[j]) {
        obj[i] = obj[i] ? obj[i] + 1 : 1
      }
    }
  }
  return obj
}

module.exports = countOnly