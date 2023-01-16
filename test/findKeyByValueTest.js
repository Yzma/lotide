const chai = require('chai')
const findKeyByValue = require('../findKeyByValue')

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  }

  it(`returns 'sci_fi' for 'findKeyByValue(bestTVShowsByGenre, "The Expanse")'`, () => {
    chai.expect(findKeyByValue(bestTVShowsByGenre, "The Expanse")).to.equal('sci_fi')
  })

  it(`returns 'comedy' for 'findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")'`, () => {
    chai.expect(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")).to.equal('comedy')
  })

 
})
