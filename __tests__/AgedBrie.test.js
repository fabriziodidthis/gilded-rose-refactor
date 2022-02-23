const AgedBrie = require('../src/AgedBrie')
const { describe, test, expect } = require('@jest/globals')

describe('AgedBries tests suite', () => {
  test('should increase quality value by 2 when the \'sellIn\' is 0', () => {
    const brie = new AgedBrie('Portugal Brie', 0, 8)
    expect(brie.itemForTomorrow().quality).toEqual(10)
  })
  // "Aged Brie" actually increases in quality the older it gets
  test('should increase quality value by 2 when the \'sellIn\' value is less than 0', () => {
    const brie = new AgedBrie('French Brie', -3, 4)
    expect(brie.itemForTomorrow().quality).toEqual(6)
  })
  test('should increase quality value up to 50', () => {
    const brie = new AgedBrie('Malta Brie', 8, 55)
    expect(brie.itemForTomorrow().quality).toEqual(50)
  })
  test('quality value should increase by 1', () => {
    const brie = new AgedBrie('Venice Brie', 5, 6)
    expect(brie.itemForTomorrow().quality).toEqual(7)
  })
})
