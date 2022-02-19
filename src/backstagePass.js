const StandardItem = require('./StandardItem')

/* "Backstage passes"
 like aged brie, increases in quality as it's sell_in value decreases;
 quality increases by 2 when there are 10 days or less
 and by 3 when there are 5 days or less
 but quality drops to 0 after the concert
*/

class Backstage extends StandardItem {
  _calculateItemDepreciation () {
    switch (true) {
      case this.sellIn <= 0:
        return this.quality
      case this.sellIn <= 5:
        return -3
      case this.sellIn <= 10:
        return -2
      default:
        return -1
    }
  }
}

module.exports = Backstage
