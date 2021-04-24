import { IntegerValue } from './integer-value.model'
import { NumericValue } from './numeric-value.model'
import { OpenClosedValue } from './openclose-value.model'

describe('IntegerValue', () => {
  let itemValue: IntegerValue
  let integerValue: IntegerValue
  let onOffValue: IntegerValue
  let openClosedValue: OpenClosedValue

  describe('construct without parameter', () => {
    it('should be undefined', () => {
      itemValue = new IntegerValue()
      expect(itemValue.value).toBeUndefined()
      expect(itemValue.hasValue).toBeFalsy()
    })
  })

  describe('construct with undefined', () => {
    it('should be undefined', () => {
      itemValue = new IntegerValue(undefined)
      expect(itemValue.value).toBeUndefined()
      expect(itemValue.hasValue).toBeFalsy()
    })
  })

  describe('compare different subtypes', () => {
    it('must return false', () => {
      integerValue = new IntegerValue(7)
      onOffValue = new IntegerValue('On')
      openClosedValue = new OpenClosedValue(1)
      expect(integerValue.equals(onOffValue)).toBeFalsy()
      expect(integerValue.equals(openClosedValue)).toBeFalsy()
      expect(openClosedValue.equals(onOffValue)).toBeFalsy()
      expect(onOffValue.equals(openClosedValue)).toBeFalsy()
    })
  })

  describe('Check accepts valid number values', () => {
    it('accepts 0', () => {
      expect(IntegerValue.check(0)).toBeTruthy()
      expect(IntegerValue.check(0.0)).toBeTruthy()
    })
    it('accepts 1', () => {
      expect(IntegerValue.check(1)).toBeTruthy()
      expect(IntegerValue.check(1.0)).toBeTruthy()
    })
    it('accepts 10.5', () => {
      expect(IntegerValue.check(10.5)).toBeFalsy()
    })
    it('accepts -15.2', () => {
      expect(IntegerValue.check(-15)).toBeTruthy()
      expect(IntegerValue.check(-15.2)).toBeFalsy()
    })
  })

  describe('Check accepts valid string values', () => {
    it('accepts "0"', () => {
      expect(IntegerValue.check('0')).toBeTruthy()
    })
    it('accepts "1"', () => {
      expect(IntegerValue.check('1')).toBeTruthy()
    })
    it('accepts "10.5"', () => {
      expect(IntegerValue.check('10.5')).toBeTruthy()
    })
    it('accepts "-15"', () => {
      expect(IntegerValue.check('-15.2')).toBeTruthy()
    })
  })

  describe('Check rejects illegal string values', () => {
    it('rejects "test"', () => {
      expect(IntegerValue.check('test')).toBeFalsy()
    })
    it('rejects "open"', () => {
      expect(IntegerValue.check('open')).toBeFalsy()
    })
    it('rejects "close"', () => {
      expect(IntegerValue.check('close')).toBeFalsy()
    })
    it('rejects "yes"', () => {
      expect(IntegerValue.check('yes')).toBeFalsy()
    })
    it('rejects "no"', () => {
      expect(IntegerValue.check('no')).toBeFalsy()
    })
    it('rejects "undefined"', () => {
      expect(IntegerValue.check('undefined')).toBeFalsy()
    })
    it('rejects "true"', () => {
      expect(IntegerValue.check('true')).toBeFalsy()
    })
    it('rejects "false"', () => {
      expect(IntegerValue.check('false')).toBeFalsy()
    })
  })

  describe('toString with unit', () => {
    it('null if non-integer number', () => {
      itemValue = new IntegerValue(10.5)
      expect(itemValue.toString('Lux')).toBe('null')
    })
    it('null if integer number', () => {
      itemValue = new IntegerValue(12)
      expect(itemValue.toString('Lux')).toBe('12 Lux')
    })
    it('value if non-integer string', () => {
      itemValue = new IntegerValue(-10)
      expect(itemValue.toString('Lux')).toBe('-10 Lux')
    })
  })

  describe('toString without unit', () => {
    it('standard precision is 3', () => {
      const itemValue = new IntegerValue(10)
      expect(itemValue.toString()).toBe('10')
    })
  })

  describe('equals', () => {
    it('true for equal values', () => {
      const itemValue1 = new IntegerValue(7)
      const itemValue2 = new IntegerValue('7')
      expect(itemValue2.value).toEqual(7)
      expect(itemValue2.equals(itemValue1)).toBeTruthy()
      expect(itemValue1.equals(itemValue2)).toBeTruthy()
    })

    it('false for unequal values', () => {
      const itemValue1 = new IntegerValue(7)
      const itemValue2 = new IntegerValue(9)
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
    })
  })

  describe('is different type from NumericValue', () => {
    it('is different', () => {
      const itemValue1 = new IntegerValue(7)
      const itemValue2 = new NumericValue('7.0')
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
    })
  })
})
