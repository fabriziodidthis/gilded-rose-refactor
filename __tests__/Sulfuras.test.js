const Sulfuras = require('../src/Sulfuras')
const { describe, test, expect } = require('@jest/globals')

describe('Sulfura test suite', () => {
  const sulfura = new Sulfuras('a wild sulfura appeared', 22, 55)
  // "Sulfuras", being a legendary item, never has to be sold nor does it decrease in quality
  test('should not reduce or decrese its quality value', () => {
    expect(sulfura.itemFortomorrow().sellIn).toEqual(22)
  })
  // nor does it decrease in quality
  test('quality value should stay the same as received', () => {
    expect(sulfura.itemFortomorrow().quality).toEqual(55)
  })
})
