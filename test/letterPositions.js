const chai = require('chai')
const letterPositions = require('../letterPositions')

describe("#letterPositions", () => {

  it(`returns array of indexs for letters of 'letterPositions("lighthouse in the house")'`, () => {
    const result = {
      l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ]
    }
    
    chai.expect(letterPositions("lighthouse in the house")).to.eql(result)
  })

})
