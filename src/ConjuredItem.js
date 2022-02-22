const StandardItem = require('../src/StandardItem')
/*
We have recently signed a supplier of conjured items. This requires an update to our system:
"Conjured" items degrade in quality twice as fast as normal items
*/

class ConjuredItem extends StandardItem {
  calculateItemDepreciation () {
    return this.sellIn <= 0 ? 4 : 2
  }
}

module.exports = ConjuredItem
