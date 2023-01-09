const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }

}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp")
assertEqual(5, "5")
assertEqual("Same", "Same ") // Expected has a space at the end - should not pass

assertEqual("Same String", "Same String")
assertEqual("5", "5")
assertEqual(1, 1)
