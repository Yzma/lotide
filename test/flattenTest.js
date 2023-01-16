const chai = require('chai')
const flatten = require('../flatten')

describe("#flatten", () => {

  it("returns '[1, 2, 3, 4, 5, 6]' for 'flatten([1, 2, [3, 4], 5, [6]])'", () => {
    chai.expect(flatten([1, 2, [3, 4], 5, [6]])).to.eql([1, 2, 3, 4, 5, 6])
  })

  it("returns '[1, 2, 3]' for 'flatten([1, [[2], [3]]])'", () => {
    chai.expect(flatten([1, 2, [3, 4], 5, [6]])).to.eql([1, 2, 3, 4, 5, 6])
  })

})
