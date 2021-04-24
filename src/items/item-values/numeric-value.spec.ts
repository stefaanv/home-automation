import { NumericValue } from './numeric-value.model'

describe('NumericValue', () => {
  let itemValue: NumericValue
  describe('construct without parameter', () => {
    it('should be undefined', () => {
      const itemValue = new NumericValue()
      expect(itemValue.value).toBeUndefined()
      expect(itemValue.hasValue).toBeFalsy()
    })
  })

  describe('construct with undefined', () => {
    it('should be undefined', () => {
      const itemValue = new NumericValue(undefined)
      expect(itemValue.value).toBeUndefined()
      expect(itemValue.hasValue).toBeFalsy()
    })
  })

  describe('Check accepts valid number values', () => {
    it('accepts 0', () => {
      expect(NumericValue.check(0)).toBeTruthy()
      expect(NumericValue.check(0.0)).toBeTruthy()
    })
    it('accepts 1', () => {
      expect(NumericValue.check(1)).toBeTruthy()
      expect(NumericValue.check(1.0)).toBeTruthy()
    })
    it('accepts 10.5', () => {
      expect(NumericValue.check(10.5)).toBeTruthy()
    })
    it('accepts -15', () => {
      expect(NumericValue.check(-15)).toBeTruthy()
      expect(NumericValue.check(-15.0)).toBeTruthy()
    })
  })

  describe('Check accepts valid string values', () => {
    it('accepts "0"', () => {
      expect(NumericValue.check('0')).toBeTruthy()
    })
    it('accepts "1"', () => {
      expect(NumericValue.check('1')).toBeTruthy()
    })
    it('accepts "10.5"', () => {
      expect(NumericValue.check('10.5')).toBeTruthy()
    })
    it('accepts "-15"', () => {
      expect(NumericValue.check('-15')).toBeTruthy()
    })
  })

  describe('Check rejects illegal string values', () => {
    it('rejects "test"', () => {
      expect(NumericValue.check('test')).toBeFalsy()
    })
    it('rejects "open"', () => {
      expect(NumericValue.check('open')).toBeFalsy()
    })
    it('rejects "close"', () => {
      expect(NumericValue.check('close')).toBeFalsy()
    })
    it('rejects "yes"', () => {
      expect(NumericValue.check('yes')).toBeFalsy()
    })
    it('rejects "no"', () => {
      expect(NumericValue.check('no')).toBeFalsy()
    })
    it('rejects "undefined"', () => {
      expect(NumericValue.check('undefined')).toBeFalsy()
    })
    it('rejects "true"', () => {
      expect(NumericValue.check('true')).toBeFalsy()
    })
    it('rejects "false"', () => {
      expect(NumericValue.check('false')).toBeFalsy()
    })
  })

  describe('update to 10.5', () => {
    it('update successfull', () => {
      const itemValue = new NumericValue(10.5)
      expect(itemValue.value).toBe(10.5)
      expect(itemValue.hasValue).toBeTruthy()
    })
  })

  describe('toString with precision 2', () => {
    it('update successfull', () => {
      const itemValue = new NumericValue(10.5)
      expect(itemValue.toString('Lux', 2)).toBe('10.50 Lux')
    })
  })

  describe('toString with precision 0', () => {
    it('update successfull', () => {
      const itemValue = new NumericValue(10.55)
      expect(itemValue.toString('Lux', 0)).toBe('11 Lux')
    })
  })

  describe('toString without unit', () => {
    it('standard precision is 3', () => {
      const itemValue = new NumericValue(10.12344444444)
      expect(itemValue.toString(undefined, 3)).toBe('10.123')
    })
  })

  describe('equals', () => {
    it('true for equal values', () => {
      const itemValue1 = new NumericValue(7.9)
      const itemValue2 = new NumericValue('7.9')
      expect(itemValue2.equals(itemValue1)).toBeTruthy()
      expect(itemValue1.equals(itemValue2)).toBeTruthy()
    })

    it('false for unequal values', () => {
      const itemValue1 = new NumericValue(7.9)
      const itemValue2 = new NumericValue(9.7)
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
    })
  })

  describe('clone', () => {
    it('has the same value', () => {
      const itemValue = new NumericValue(7.9)
      const clone = itemValue.clone()
      expect(clone.value).toBe(7.9)
      expect(clone.equals(itemValue)).toBeTruthy
      expect(itemValue.equals(clone)).toBeTruthy
    })
  })
})
