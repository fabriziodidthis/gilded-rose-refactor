const Item = require('./Item')

class Standard extends Item {
  itemForTomorrow () {
    this.quality = this._qualityForTomorrow()
    this.sellIn--
    return this
  }

  _qualityForTomorrow () {
    const qualityForTomorrow = this.quality - this._calculateItemDepreciation()
    if (qualityForTomorrow < 0) return 0
    if (qualityForTomorrow >= 50) return 50
    return qualityForTomorrow
  }

  _calculateItemDepreciation () {
    return this.sellIn <= 0 ? 2 : 1
  }
}

module.exports = Standard
