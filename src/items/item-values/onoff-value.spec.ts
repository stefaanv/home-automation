import { ItemValue } from './item-value.model'
import { NumericValue } from './numeric-value.model'
import { OnOffValue } from './onoff-value.model'
import { OpenClosedValue } from './openclose-value.model'

describe('OnOff ItemValue', () => {
  let onOffValue = new OnOffValue()
  describe('initial status', () => {
    it('should be undefined', () => {
      const itemValue = new OnOffValue()
      expect(itemValue.value).toBeUndefined()
      expect(itemValue.hasValue).toBeFalsy()
      expect(itemValue).toBeInstanceOf(ItemValue)
      expect(itemValue).toBeInstanceOf(OnOffValue)
      expect(itemValue).not.toBeInstanceOf(OpenClosedValue)
    })
  })

  describe('Check accepts valid string values', () => {
    it('accepts "on"', () => {
      expect(OnOffValue.check('on')).toBeTruthy()
    })
    it('accepts "On"', () => {
      expect(OnOffValue.check('On')).toBeTruthy()
    })
    it('accepts "ON"', () => {
      expect(OnOffValue.check('ON')).toBeTruthy()
    })
    it('accepts "off"', () => {
      expect(OnOffValue.check('off')).toBeTruthy()
    })
    it('accepts "Off"', () => {
      expect(OnOffValue.check('Off')).toBeTruthy()
    })
    it('accepts "OFF"', () => {
      expect(OnOffValue.check('OFF')).toBeTruthy()
    })
  })

  describe('Check rejects illegal string values', () => {
    it('rejects "test"', () => {
      expect(OnOffValue.check('test')).toBeFalsy()
    })
    it('rejects "open"', () => {
      expect(OnOffValue.check('open')).toBeFalsy()
    })
    it('rejects "close"', () => {
      expect(OnOffValue.check('close')).toBeFalsy()
    })
    it('rejects "yes"', () => {
      expect(OnOffValue.check('yes')).toBeFalsy()
    })
    it('rejects "no"', () => {
      expect(OnOffValue.check('no')).toBeFalsy()
    })
    it('rejects "undefined"', () => {
      expect(OnOffValue.check('undefined')).toBeFalsy()
    })
    it('rejects "0"', () => {
      expect(OnOffValue.check('0')).toBeFalsy()
    })
    it('rejects "1"', () => {
      expect(OnOffValue.check('1')).toBeFalsy()
    })
    it('rejects "true"', () => {
      expect(OnOffValue.check('true')).toBeFalsy()
    })
    it('rejects "false"', () => {
      expect(OnOffValue.check('false')).toBeFalsy()
    })
  })

  describe('Check accepts valid numerical values', () => {
    it('accepts 0', () => {
      expect(OnOffValue.check(0)).toBeTruthy()
    })
    it('accepts 1', () => {
      expect(OnOffValue.check(1)).toBeTruthy()
    })
  })

  describe('Check rejects illegal numerical values', () => {
    it('rejects -1', () => {
      expect(OnOffValue.check(-1)).toBeFalsy()
    })
    it('rejects -2', () => {
      expect(OnOffValue.check(-2)).toBeFalsy()
    })
    it('rejects 2', () => {
      expect(OnOffValue.check(2)).toBeFalsy()
    })
    it('rejects 3', () => {
      expect(OnOffValue.check(3)).toBeFalsy()
    })
  })

  describe('create new', () => {
    it('create with "on"', () => {
      const itemValue = new OnOffValue('on')
      expect(itemValue.value).toBe('on')
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.toString()).toBe('on')
    })

    it('create with "On"', () => {
      const itemValue = new OnOffValue('On')
      expect(itemValue.value).toBe('on')
      expect(itemValue.toString()).toBe('on')
    })

    it('create with "ON"', () => {
      const itemValue = new OnOffValue('ON')
      expect(itemValue.value).toBe('on')
      expect(itemValue.toString()).toBe('on')
    })

    it('create with 1', () => {
      const itemValue = new OnOffValue(1)
      expect(itemValue.value).toBe('on')
      expect(itemValue.toString()).toBe('on')
    })

    it('create with "off"', () => {
      const itemValue = new OnOffValue('off')
      expect(itemValue.value).toBe('off')
      expect(itemValue.toString()).toBe('off')
    })

    it('create with "Off"', () => {
      const itemValue = new OnOffValue('Off')
      expect(itemValue.value).toBe('off')
      expect(itemValue.toString()).toBe('off')
    })

    it('create with "OFF"', () => {
      const itemValue = new OnOffValue('OFF')
      expect(itemValue.value).toBe('off')
      expect(itemValue.toString()).toBe('off')
    })

    it('create with 0', () => {
      const itemValue = new OnOffValue(0)
      expect(itemValue.value).toBe('off')
      expect(itemValue.toString()).toBe('off')
    })

    it('create with true', () => {
      const itemValue = new OnOffValue(true)
      expect(itemValue.value).toBe('on')
      expect(itemValue.toString()).toBe('on')
    })

    it('create with false', () => {
      const itemValue = new OnOffValue(false)
      expect(itemValue.value).toBe('off')
      expect(itemValue.toString()).toBe('off')
    })
  })

  describe('equals ', () => {
    it('true for equal values', () => {
      const itemValue1 = new OnOffValue('on')
      const itemValue2 = new OnOffValue(1)
      expect(itemValue2.equals(itemValue1)).toBeTruthy()
      expect(itemValue1.equals(itemValue2)).toBeTruthy()
      expect(itemValue1.equalsPrimitive('on')).toBeTruthy()
      expect(itemValue1.equalsPrimitive('ON')).toBeTruthy()
      expect(itemValue1.equalsPrimitive(1)).toBeTruthy()
      expect(itemValue1.equalsPrimitive(true)).toBeTruthy()
    })

    it('false for unequal values', () => {
      const itemValue1 = new OnOffValue('on')
      const itemValue2 = new OnOffValue(0)
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
      expect(itemValue1.equalsPrimitive('off')).toBeFalsy()
      expect(itemValue1.equalsPrimitive(0)).toBeFalsy()
      expect(itemValue1.equalsPrimitive(false)).toBeFalsy()
    })

    it('undefined does not equal other value', () => {
      const itemValue1 = new OnOffValue('on')
      const itemValue2 = new OnOffValue(undefined)
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
      expect(itemValue1.equalsPrimitive(undefined)).toBeFalsy()
      expect(itemValue1.equalsPrimitive('blabla')).toBeFalsy()
    })

    it('undefined does not equal other value', () => {
      const itemValue1 = new OnOffValue(undefined)
      const itemValue2 = new OnOffValue('OFF')
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
      expect(itemValue1.equalsPrimitive('on')).toBeFalsy()
      expect(itemValue1.equalsPrimitive(true)).toBeFalsy()
      expect(itemValue1.equalsPrimitive(undefined)).toBeTruthy()
    })

    it('Compare with OpenClosed type', () => {
      const itemValue1 = new OnOffValue(1)
      const itemValue2 = new OpenClosedValue('open')
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
    })

    it('Compare with Numeric type', () => {
      const itemValue1 = new OnOffValue(0)
      const itemValue2 = new NumericValue(0)
      expect(itemValue2.equals(itemValue1)).toBeFalsy()
      expect(itemValue1.equals(itemValue2)).toBeFalsy()
    })
  })

  describe('clone', () => {
    it('has the same value', () => {
      const itemValue = new OnOffValue(1)
      const clone = itemValue.clone()
      expect(clone.value).toBe('on')
    })
  })
})
