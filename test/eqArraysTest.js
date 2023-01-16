const chai = require('chai')
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {

  it("returns true for 'eqArrays([1, 2, 3], [1, 2, 3])'", () => {
    chai.expect(eqArrays([1, 2, 3], [1, 2, 3])).to.equal(true)
  })

  it(`returns true for 'eqArrays(["1", "2", "3"], ["1", "2", "3"])'`, () => {
    chai.expect(eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.equal(true)
  })

  it(`returns true for 'eqArrays([[2, 3], [3, 2]], [[2, 3], [3, 2]])'`, () => {
    chai.expect(eqArrays([[2, 3], [3, 2]], [[2, 3], [3, 2]])).to.equal(true)
  })

  it(`returns true for 'eqArrays([[2, 3], [4]], [[2, 3], [4]])'`, () => {
    chai.expect(eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.equal(true)
  })

  it(`returns false for 'eqArrays([1, 2, 3], [3, 2, 1])'`, () => {
    chai.expect(eqArrays([1, 2, 3], [3, 2, 1])).to.equal(false)
  })

  it(`returns false for 'eqArrays(["1", "2", "3"], ["1", "2", 3])'`, () => {
    chai.expect(eqArrays(["1", "2", "3"], ["1", "2", 3])).to.equal(false)
  })

  it(`returns false for 'eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])'`, () => {
    chai.expect(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])).to.equal(false)
  })

  it(`returns false for 'eqArrays([[2, 3], [4]], [[2, 3], 4])'`, () => {
    chai.expect(eqArrays([[2, 3], [4]], [[2, 3], 4])).to.equal(false)
  })
})
