import { itemValueFactory } from './item-value-factory'
import { NumericValue } from './numeric-value.model'
import { OnOffValue } from './onoff-value.model'

describe('Numeric ItemValue', () => {
  let itemValue: NumericValue

  beforeEach(() => {
    itemValue = new NumericValue(2, 'Lux')
  })

  describe('initial status', () => {
    it('should be undefined', () => {
      expect(itemValue.value).toBeUndefined()
    })
  })

  describe('can be created with itemValueFactory', () => {
    it('should be of type NumericValue', () => {
      expect(itemValueFactory('Numeric')).toBeInstanceOf(NumericValue)
    })
  })

  describe('Check accepts valid number values', () => {
    it('accepts 0', () => {
      expect(itemValue.check(0)).toBeTruthy()
    })
    it('accepts 1', () => {
      expect(itemValue.check(1)).toBeTruthy()
    })
    it('accepts 10.5', () => {
      expect(itemValue.check(10.5)).toBeTruthy()
    })
    it('accepts -15', () => {
      expect(itemValue.check(-15)).toBeTruthy()
    })
  })

  describe('Check accepts valid string values', () => {
    it('accepts "0"', () => {
      expect(itemValue.check('0')).toBeTruthy()
    })
    it('accepts "1"', () => {
      expect(itemValue.check('1')).toBeTruthy()
    })
    it('accepts "10.5"', () => {
      expect(itemValue.check('10.5')).toBeTruthy()
    })
    it('accepts "-15"', () => {
      expect(itemValue.check('-15')).toBeTruthy()
    })
  })

  describe('Check rejects illegal string values', () => {
    it('rejects "test"', () => {
      expect(itemValue.check('test')).toBeFalsy()
    })
    it('rejects "open"', () => {
      expect(itemValue.check('open')).toBeFalsy()
    })
    it('rejects "close"', () => {
      expect(itemValue.check('close')).toBeFalsy()
    })
    it('rejects "yes"', () => {
      expect(itemValue.check('yes')).toBeFalsy()
    })
    it('rejects "no"', () => {
      expect(itemValue.check('no')).toBeFalsy()
    })
    it('rejects "undefined"', () => {
      expect(itemValue.check('undefined')).toBeFalsy()
    })
    it('rejects "true"', () => {
      expect(itemValue.check('true')).toBeFalsy()
    })
    it('rejects "false"', () => {
      expect(itemValue.check('false')).toBeFalsy()
    })
  })

  describe('update to 10.5', () => {
    it('update successfull', () => {
      const success = itemValue.update(10.5)
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe(10.5)
    })
  })

  describe('update to illegal value "test"', () => {
    it('must fail', () => {
      itemValue.update('25')
      const success = itemValue.update('test')
      expect(success).toBeFalsy()
      expect(itemValue.value).toBe(25)
    })
  })

  describe('toString with precision 2', () => {
    it('update successfull', () => {
      itemValue.update(10.5)
      expect(itemValue.toString()).toBe('10.50 Lux')
    })
  })

  describe('toString with precision 0', () => {
    it('update successfull', () => {
      itemValue = new NumericValue(0, 'Lux')
      itemValue.update(10.55)
      expect(itemValue.toString()).toBe('11 Lux')
    })
  })

  describe('toString without unit', () => {
    it('update successfull', () => {
      itemValue = new NumericValue(2)
      itemValue.update(10.55)
      expect(itemValue.toString()).toBe('10.55')
    })
  })

  describe('toString without unit', () => {
    it('standard precision is 3', () => {
      itemValue = new NumericValue()
      itemValue.update(10.12344444444)
      expect(itemValue.toString()).toBe('10.123')
    })
  })
})
