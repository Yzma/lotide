const chai = require('chai')
const tail = require('../tail')

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    chai.assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })

  it("returns ['2', '3'] for ['1', '2', '3']", () => {
    chai.assert.deepEqual(tail(['1', '2', '3']), ['2', '3'])
  })
})
