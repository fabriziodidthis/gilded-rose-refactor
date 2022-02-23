const StandardItem = require('../src/StandardItem')

class AgedBrie extends StandardItem {
  // "Aged Brie" actually increases in quality the older it gets
  calculateItemDepreciation () {
    return this.sellIn <= 0 ? -2 : -1
  }
}

module.exports = AgedBrie
