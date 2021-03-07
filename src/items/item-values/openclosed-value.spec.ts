import { itemValueFactory } from './item-value-factory'
import { OpenClosedValue } from './openclose-value.model'

describe('OpenClosed ItemValue', () => {
  let itemValue: OpenClosedValue

  beforeEach(() => {
    itemValue = new OpenClosedValue()
  })

  describe('initial status', () => {
    it('should be undefined', () => {
      expect(itemValue.value).toBeUndefined()
    })
  })

  describe('can be created with itemValueFactory', () => {
    it('should be of type OpenClosedValueType', () => {
      expect(itemValueFactory('OpenClosed')).toBeInstanceOf(OpenClosedValue)
    })
  })

  describe('Check accepts valid string values', () => {
    it('accepts "open"', () => {
      expect(itemValue.check('open')).toBeTruthy()
    })
    it('accepts "Open"', () => {
      expect(itemValue.check('Open')).toBeTruthy()
    })
    it('accepts "OPEN"', () => {
      expect(itemValue.check('OPEN')).toBeTruthy()
    })
    it('accepts "closed"', () => {
      expect(itemValue.check('closed')).toBeTruthy()
    })
    it('accepts "Closed"', () => {
      expect(itemValue.check('Closed')).toBeTruthy()
    })
    it('accepts "CLOSED"', () => {
      expect(itemValue.check('CLOSED')).toBeTruthy()
    })
  })

  describe('Check rejects illegal string values', () => {
    it('rejects "test"', () => {
      expect(itemValue.check('test')).toBeFalsy()
    })
    it('rejects "on"', () => {
      expect(itemValue.check('on')).toBeFalsy()
    })
    it('rejects "off"', () => {
      expect(itemValue.check('off')).toBeFalsy()
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

  describe('update to "open"', () => {
    it('update successfull', () => {
      const success = itemValue.update('open')
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('open')
    })
  })

  describe('update to "CLOSED"', () => {
    it('update successfull', () => {
      const success = itemValue.update('CLOSED')
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('closed')
    })
  })

  describe('update to 1', () => {
    it('update successfull', () => {
      const success = itemValue.update(1)
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('open')
    })
  })

  describe('update to 0', () => {
    it('update successfull', () => {
      const success = itemValue.update(0)
      expect(success).toBeTruthy()
      expect(itemValue.hasValue).toBeTruthy()
      expect(itemValue.value).toBe('closed')
    })
  })

  describe('update to illegal value "test"', () => {
    it('must fail', () => {
      itemValue.update('open')
      const success = itemValue.update('test')
      expect(success).toBeFalsy()
      expect(itemValue.value).toBe('open')
    })
  })

  describe('update to illegal value "3"', () => {
    it('must fail', () => {
      itemValue.update(0)
      const success = itemValue.update(3)
      expect(success).toBeFalsy()
      expect(itemValue.value).toBe('closed')
    })
  })

  describe('toString of 0', () => {
    it('must return "off"', () => {
      itemValue.update(0)
      expect(itemValue.value?.toString()).toBe('closed')
    })
  })

  describe('toString of ON', () => {
    it('must return "on"', () => {
      itemValue.update('OPEN')
      expect(itemValue.value?.toString()).toBe('open')
    })
  })
})
