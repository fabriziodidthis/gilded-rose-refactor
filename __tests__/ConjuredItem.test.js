const { describe, test, expect } = require('@jest/globals')
const ConjuredItem = require('../src/ConjuredItem')

describe('Conjured Items tests suite', () => {
  // "Conjured" items degrade in quality twice as fast as normal items
  test('should decrease quality value by 2 when the \'sellIn\' is greater than 0', () => {
    const conjured = new ConjuredItem('apple from the witch', 2, 12)
    expect(conjured.itemForTomorrow().quality).toEqual(10)
  })
  test('should decrease quality value by 4 when \'sellIn\' value is 0', () => {
    const conjured = new ConjuredItem('forbidden god\'s apple', 0, 15)
    expect(conjured.itemForTomorrow().quality).toEqual(11)
  })
  // Once the sell_in days is less then zero, quality degrades twice as fast
  test('should decrease quality value by 4 when \'sellIn\' value is less than 0', () => {
    const conjured = new ConjuredItem('aquiles arrow', -3, 9)
    expect(conjured.itemForTomorrow().quality).toEqual(5)
  })
})
