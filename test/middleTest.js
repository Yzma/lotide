
const chai = require('chai')
const middle = require('../middle')

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    chai.assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })

  it("returns [4] for [1, 2, 3, 4, 5, 6, 8]", () => {
    chai.assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 8]), [4])
  })

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    chai.assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  })

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    chai.assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
})
