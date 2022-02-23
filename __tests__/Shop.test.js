const { describe, test, expect } = require('@jest/globals')
const Shop = require('../src/Shop')

let itemsToMock = null
let shopItems = null
const itemForTomorrowMock = {}

itemsToMock = {
  itemsForTomorrow: function () {
    return itemForTomorrowMock
  }
}
shopItems = new Shop([itemsToMock])

console.log('shopItems', shopItems)

describe('Shop tests suite', () => {
  test('should update the inventory (stock) ', () => {
    // to do
  })

  test('should show all updated items', () => {
    // to do
  })
})
