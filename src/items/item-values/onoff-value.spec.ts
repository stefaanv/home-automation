import { itemValueFactory } from './item-value-factory'
import { OnOffValue } from './onoff-value.model'

describe('OnOff ItemValue', () => {
  let itemValue: OnOffValue

  beforeEach(() => {
    itemValue = new OnOffValue()
  })

  describe('initial status', () => {
    it('should be undefined', () => {
      expect(itemValue.value).toBeUndefined()
    })
  })

  describe('can be created with itemValueFactory', () => {
    it('should be of type OnOffValueType', () => {
      expect(itemValueFactory('OnOff')).toBeInstanceOf(OnOffValue)
    })
  })

  describe('Check accepts valid string values', () => {
    it('accepts "on"', () => {
      expect(itemValue.check('on')).toBeTruthy()
    })
    it('accepts "On"', () => {
      expect(itemValue.check('On')).toBeTruthy()
    })
    it('accepts "ON"', () => {
      expect(itemValue.check('ON')).toBeTruthy()
    })
    it('accepts "off"', () => {
      expect(itemValue.check('off')).toBeTruthy()
    })
    it('accepts "Off"', () => {
      expect(itemValue.check('Off')).toBeTruthy()
    })
    it('accepts "OFF"', () => {
      expect(itemValue.check('OFF')).toBeTruthy()
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
    it('rejects "0"', () => {
      expect(itemValue.check('0')).toBeFalsy()
    })
    it('rejects "1"', () => {
      expect(itemValue.check('1')).toBeFalsy()
    })
    it('rejects "true"', () => {
      expect(itemValue.check('true')).toBeFalsy()
    })
    it('rejects "false"', () => {
      expect(itemValue.check('false')).toBeFalsy()
    })
  })

  describe('Check accepts valid numerical values', () => {
    it('accepts 0', () => {
      expect(itemValue.check(0)).toBeTruthy()
    })
    it('accepts 1', () => {
      expect(itemValue.check(1)).toBeTruthy()
    })
  })

  describe('Check rejects illegal string values', () => {
    it('rejects -1', () => {
      expect(itemValue.check(-1)).toBeFalsy()
    })
    it('rejects -2', () => {
      expect(itemValue.check(-2)).toBeFalsy()
    })
    it('rejects 2', () => {
      expect(itemValue.check(2)).toBeFalsy()
    })
    it('rejects 3', () => {
      expect(itemValue.check(3)).toBeFalsy()
    })
  })

  describe('update to "on"', () => {
    it('update successfull', () => {
      const success = itemValue.update('on')
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('on')
    })
  })

  describe('update to "OFF"', () => {
    it('update successfull', () => {
      const success = itemValue.update('OFF')
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('off')
    })
  })

  describe('update to 1', () => {
    it('update successfull', () => {
      const success = itemValue.update(1)
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('on')
    })
  })

  describe('update to 0', () => {
    it('update successfull', () => {
      const success = itemValue.update(0)
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('off')
    })
  })

  describe('update to illegal value "test"', () => {
    it('must fail', () => {
      itemValue.update('on')
      const success = itemValue.update('test')
      expect(success).toBeFalsy()
      expect(itemValue.value).toBe('on')
    })
  })

  describe('update to illegal value "3"', () => {
    it('must fail', () => {
      itemValue.update(0)
      const success = itemValue.update(3)
      expect(success).toBeFalsy()
      expect(itemValue.value).toBe('off')
    })
  })
})
