const Item = require('./Item')

class Sulfuras extends Item {
  // "Sulfuras", being a legendary item, never has to be sold nor does it decrease in quality
  itemFortomorrow () {
    return this
  }
}

module.exports = Sulfuras
