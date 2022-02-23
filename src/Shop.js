const StandardItem = require('../src/StandardItem')

class Shop extends StandardItem {
  // We have a system in place that updates our inventory for us.
  constructor (itemForTomorrow, items = []) {
    super(itemForTomorrow)
    this.items = items
  }

  updateInventory () {
    this.items.forEach((item) => {
      return item.itemForTomorrow()
    })
  }
}

module.exports = Shop
