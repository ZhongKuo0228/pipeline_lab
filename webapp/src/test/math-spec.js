import { expect } from 'chai'
import { addTwoNumbers } from '../controller/addTwoNumbers.js'

// 描述測試組
describe('Math Functions', () => {
  // 描述單個測試案例
  describe('addTwoNumbers function', () => {
    it('should return 2 when adding 1 and 1', () => {
      const result = addTwoNumbers(1, 1)
      expect(result).to.equal(2)
    })
  })
})
