import { Item } from './item'
import { OnOffValue } from './item-values/onoff-value.model'
import { OpenClosedValue } from './item-values/openclose-value.model'

describe('Item tests', () => {
  const now = new Date(2021, 3, 5, 17, 35, 10)
  const previously = new Date(2021, 3, 5, 17, 34, 55)
  const later = new Date(2021, 3, 5, 17, 35, 15)

  describe('Construct uninitialised item', () => {
    it('OpenClosed Item', () => {
      const item = new Item('OpenClosed', 'myItem')
      expect(item.name).toBe('myItem')
      expect(item.lastChange).toBeUndefined()
      expect(item.hasValue).toBeFalsy()
      expect(item.toString()).toBe('null')
    })
    it('OnOff Item', () => {
      const item = new Item('OnOff', 'myItem')
      expect(item.name).toBe('myItem')
      expect(item.lastChange).toBeUndefined()
      expect(item.hasValue).toBeFalsy()
      expect(item.toString()).toBe('null')
    })
    it('Numeric Item', () => {
      const item = new Item('Numeric', 'myItem')
      expect(item.name).toBe('myItem')
      expect(item.lastChange).toBeUndefined()
      expect(item.hasValue).toBeFalsy()
      expect(item.toString()).toBe('null')
    })
  })

  describe('Construct initialised item', () => {
    it('OpenClosed Item', () => {
      const item = new Item('OpenClosed', 'myItem', 'OPEN', undefined, undefined, now)
      expect(item.name).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.lastValue).toBeUndefined()
      expect(item.toString()).toBe('open')
    })

    it('OnOff Item', () => {
      const item = new Item('OnOff', 'myItem', 1, undefined, undefined, now)
      expect(item.name).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.lastValue).toBeUndefined()
      expect(item.toString()).toBe('on')
    })

    it('Numeric Item', () => {
      const item = new Item('Numeric', 'myItem', 1.123, 2, 'm', now)
      expect(item.name).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.toString()).toBe('1.12 m')
    })

    it('Integer Item', () => {
      const item = new Item('Integer', 'myItem', '-125.36', 0, 'm', now)
      expect(item.name).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.toString()).toBe('-125 m')
    })
  })

  describe('change object state', () => {
    it('OpenClosed item', () => {
      const item = new Item('OpenClosed', 'myItem', 1, undefined, undefined, previously)
      item.updateStatus('closed', now)
      expect(item.lastChange).toBe(now)
      expect(item.state).toBe('closed')
      item.updateStatus('illegal', later)
      expect(item.lastChange).toBe(later)
      expect(item.state).toBe('null')
    })
    it('OpenClosed starting from undefined', () => {
      const item = new Item('OpenClosed', 'myItem', 'illegal', undefined, undefined, previously)
      expect(item.lastChange).toBeUndefined()
      item.updateStatus('closed', now)
      expect(item.lastChange).toBe(now)
      expect(item.state).toBe('closed')
    })
    it('Integer object', () => {
      const item = new Item('Integer', 'myItem', 25, undefined, undefined, previously)
      expect(item.lastChange).toBe(previously)
      expect(item.state).toBe('25')
      item.updateStatus(-13, now)
      expect(item.lastChange).toBe(now)
      expect(item.state).toBe('-13')
    })
  })
})
