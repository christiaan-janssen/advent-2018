import { calibrate } from '../src/puzzel-01'

describe("Advent 2018", () => {
  it("Should test the smoke", () => {
    expect(true)
  })
  describe('Puzzel 01 a', () => {
    it('should handle positive numbers', () => {
      expect(calibrate('+17', 0)).toBe(17)
    })
    
    it('should handle negative numbers', () => {
      expect(calibrate('-17', 0)).toBe(-17)
    })

    it('should work with reduce', () => {
      expect(['+10', '-5', '+8'].reduce(calibrate)).toBe(13)
    })
  })
})