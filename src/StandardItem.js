
const Item = require('./Item')

class StandardItem extends Item {
  itemForTomorrow () {
    this.quality = this.qualityForTomorrow()
    this.sellIn--
    return this
  }

  qualityForTomorrow () {
    // Once the sell_in days is less then zero, quality degrades twice as fast
    const qualityForTomorrow = this.quality - this.calculateItemDepreciation()
    // The quality of an item is never negative
    if (qualityForTomorrow < 0) return 0
    // The quality of an item is never more than 50
    if (qualityForTomorrow >= 50) return 50
    return qualityForTomorrow
  }

  calculateItemDepreciation () {
    return this.sellIn <= 0 ? 2 : 1
  }
}

module.exports = StandardItem
