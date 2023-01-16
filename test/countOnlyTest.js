const chai = require('chai')
const countOnly = require('../countOnly')

describe("#countOnly", () => {

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
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

  it("returns 1 for 'result['Jason']'", () => {
    chai.expect(result['Jason']).to.equal(1)
  })

  it("returns 2 for 'result['Fang']'", () => {
    chai.expect(result['Fang']).to.equal(2)
  })

  it("returns undefined for 'result['Karima']'", () => {
    chai.expect(result['Karima']).to.equal(undefined)
  })

  it("returns undefined for 'result['Agouhanna']'", () => {
    chai.expect(result['Agouhanna']).to.equal(undefined)
  })

  it("returns undefined for 'result[undefined]'", () => {
    chai.expect(result[undefined]).to.equal(undefined)
  })
})
