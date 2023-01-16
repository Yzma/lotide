const chai = require('chai')
const countLetters = require('../countLetters')

describe("#countLetters", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    chai.expect(countLetters('lighthouse in the house')).to.eql({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 })
  })

  it("returns '{ t: 2, e: 1, s: 1}' for 'test'", () => {
    chai.expect(countLetters('test')).to.eql({ t: 2, e: 1, s: 1})
  })
})