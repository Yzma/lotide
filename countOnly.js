const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }
}

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

assertEquals(result1["Jason"], 1)
assertEquals(result1["Karima"], undefined)
assertEquals(result1["Fang"], 2)
assertEquals(result1["Agouhanna"], undefined)