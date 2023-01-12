
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]
const results1 = takeUntil(data1, x => x < 0)
console.log(results1)
