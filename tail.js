
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

const words = ["Yo Yo", "Lighthouse", "Labs"]
const words2 = ["1", "2", "3"]

const tails1 = tail(words)
const tails2 = tail(words2)

console.log(tails1)
console.log(tails2)