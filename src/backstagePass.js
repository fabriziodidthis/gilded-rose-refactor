const StandardItem = require('./StandardItem')

/* "Backstage passes"
 like aged brie, increases in quality as it's sell_in value decreases;
 quality increases by 2 when there are 10 days or less
 and by 3 when there are 5 days or less
 but quality drops to 0 after the concert
*/

class Backstage extends StandardItem {
  calculateItemDepreciation () {
    switch (true) {
      // quality increases by 2 when there are 10 days or less and by 3 when there are 5 days
      //  or less but quality drops to 0 after the concert
      // but quality drops to 0 after the concert
      case this.sellIn <= 0:
        return this.quality
        // and by 3 when there are 5 days
      case this.sellIn <= 5:
        return -3
      // quality increases by 2 when there are 10 days or less
      case this.sellIn <= 10:
        return -2
      default:
        return -1
    }
  }
}

module.exports = Backstage
