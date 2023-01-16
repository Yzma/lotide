const chai = require('chai')
const head   = require('../head')

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    chai.assert.strictEqual(head([1, 2, 3]), 1)
  })

  it("returns '5' for ['5']", () => {
    chai.assert.strictEqual(head(['5']), '5')
  })

  it("expect 5 to not equal 3", () => {
    chai.expect(head(['3'])).to.not.equal('5')
  })
})