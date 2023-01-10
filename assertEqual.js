const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑Assertion Failed: [${actual}] !== [${expected}]`)
  }
}

// TEST CODE
assertEquals("Lighthouse Labs", "Bootcamp")
assertEquals(5, "5")
assertEquals("Same", "Same ") // Expected has a space at the end - should not pass

assertEquals("Same String", "Same String")
assertEquals("5", "5")
assertEquals(1, 1)
