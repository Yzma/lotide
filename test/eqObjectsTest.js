const chai = require('chai')
const eqObjects = require('../eqObjects')

describe("#eqObjects", () => {

  it(`returns true for 'eqObjects({a: undefined}, {a: undefined})'`, () => {
    chai.expect(eqObjects({a: undefined}, {a: undefined})).to.equal(true)
  })

  it(`returns true for 'eqObjects({a: "a", b: "b"}, {a: "a", b: "b"})'`, () => {
    chai.expect(eqObjects({a: "a", b: "b"}, {a: "a", b: "b"})).to.equal(true)
  })
  
  it(`returns true for 'eqObjects({a: ["1", "2"], b: false}, {a: ["1", "2"], b: false})'`, () => {
    chai.expect(eqObjects({a: ["1", "2"], b: false}, {a: ["1", "2"], b: false})).to.equal(true)
  })

  it(`returns true for 'eqObjects({a: undefined, b: false}, {a: undefined, b: false})'`, () => {
    chai.expect(eqObjects({a: undefined, b: false}, {a: undefined, b: false})).to.equal(true)
  })

  it(`(recursive) returns true for 'eqObjects({ a: { z: 1, test: { apple: 1} }, b: 2 }, { a: { z: 1, test: { apple: 1 } }, b: 2 })'`, () => {
    chai.expect(eqObjects({ a: { z: 1, test: { apple: 1} }, b: 2 }, { a: { z: 1, test: { apple: 1 } }, b: 2 })).to.equal(true)
  })

  it(`returns false for 'eqObjects({a: "a"}, {a: "a", b: "b"})'`, () => {
    chai.expect(eqObjects({a: "a"}, {a: "a", b: "b"})).to.equal(false)
  })

  it(`returns false for 'eqObjects({a: undefined, b: false}, {c: undefined, b: false})'`, () => {
    chai.expect(eqObjects({a: undefined, b: false}, {c: undefined, b: false})).to.equal(false)
  })

  it(`returns false for 'eqObjects({a: "same", b: "same"}, {a: "same", b: "not same"})'`, () => {
    chai.expect(eqObjects({a: "same", b: "same"}, {a: "same", b: "not same"})).to.equal(false)
  })

  it(`returns false for 'eqObjects({a: "dif1", b: "dif2", not: "undef", same: "yes"}, {a: "dif3", b: "dif4", not1: "undef", same: "yes"})'`, () => {
    chai.expect(eqObjects({a: "dif1", b: "dif2", not: "undef", same: "yes"}, {a: "dif3", b: "dif4", not1: "undef", same: "yes"})).to.equal(false)
  })

  it(`(recursive) returns false for 'eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })'`, () => {
    chai.expect(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.equal(false)
  })

  it(`(recursive) returns false for 'eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })'`, () => {
    chai.expect(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })).to.equal(false)
  })
})
