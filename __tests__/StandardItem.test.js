const { describe, expect, test } = require('@jest/globals')
const StandardItem = require('../src/StandardItem')

describe('StandardItem test suite', () => {
  test('reduces the \'sellIn\' value by 1 when item is due for tomorrow', () => {
    const item = new StandardItem('cheese', 2, 0)
    expect(item.itemForTomorrow().sellIn).toEqual(1)
  })
  test('should reduce an item quality value until reach 0', () => {
    const item = new StandardItem('cheese', 2, 0)
    expect(item.itemForTomorrow().quality).toBe(0)
  })

  test('reduces by 1 the item quality value when \'sellIn\' value is greater than 0', () => {
    const item = new StandardItem('banana', 5, 6)
    expect(item.itemForTomorrow().sellIn).toBe(4)
  })

  test('should decrease by 2 the quality value when \'sellIn\' value is equal to 0', () => {
    const item = new StandardItem('kale', 0, 3)
    expect(item.itemForTomorrow().quality).toEqual(1)
  })

  test('should increase by 2 the quality value when \'sellIn\' value is less than 0', () => {
    const item = new StandardItem('passion fruit', -3, 3)
    expect(item.itemForTomorrow().quality).toEqual(1)
  })
})
