const sum = require('../helpers/sum')

describe('Sum function', () => {
  test('should sum numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
