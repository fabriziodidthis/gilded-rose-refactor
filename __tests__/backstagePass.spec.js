const { describe, expect, test } = require('@jest/globals')
const Backstage = require('../src/backstagePass')

describe('Backstage Pass testing suite', () => {
  test('should check quality value maximum value when the quality value is increased up to 50', () => {
    const item = new Backstage('bow', 3, 50)
    expect(item.itemForTomorrow().quality).toEqual(50)
  })

  test('should increase by 1 the quality value when the sellIn value is greater than 10', () => {
    const item = new Backstage('bow', 13, 19)
    expect(item.itemForTomorrow().quality).toEqual(20)
  })

  test('should increase by 2 the quality value when the sellIn value is 10 or less', () => {
    const item = new Backstage('bow', 9, 17)
    expect(item.itemForTomorrow().quality).toEqual(19)
  })

  test('should increase by 3 the quality value when the sellIn value is 5 or less', () => {
    const item = new Backstage('bow', 4, 15)
    expect(item.itemForTomorrow().quality).toEqual(18)
  })

  test('should set 0 for quality value when the sellIn value is 0', () => {
    const item = new Backstage('bow', 0, 15)
    expect(item.itemForTomorrow().quality).toEqual(0)
  })

  test('should set 0 for quality value when sellIn value is 0', () => {
    const item = new Backstage('bow', -2, 9)
    expect(item.itemForTomorrow().quality).toEqual(0)
  })
})
