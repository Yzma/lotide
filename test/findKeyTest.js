const chai = require('chai')
const findKey = require('../findKey')

describe("#findKey", () => {

  const testObj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }

  it("returns 'Blue Hill' for 'findKey(testObj, x => x.stars === 1)'", () => {
    chai.expect(findKey(testObj, x => x.stars === 1)).to.equal('Blue Hill')
  })

  it("returns 'noma' for 'findKey(testObj, x => x.stars === 2)'", () => {
    chai.expect(findKey(testObj, x => x.stars === 2)).to.equal('noma')
  })

  it("returns 'Akaleri' for 'findKey(testObj, x => x.stars === 3)'", () => {
    chai.expect(findKey(testObj, x => x.stars === 3)).to.equal('Akaleri')
  })

  it("returns 'null' for 'findKey(testObj, x => x.stars === 90)'", () => {
    chai.expect(findKey(testObj, x => x.stars === 90)).to.equal(null)
  })
})
