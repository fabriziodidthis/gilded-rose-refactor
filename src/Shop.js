class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateStock () {
    this.items.forEach((item) => {
      return item.itemForTomorrow()
    })
    // return this.items.map(function (item) {
    //   return item.itemForTomorrow()
    // })
  }
}

module.exports = Shop
