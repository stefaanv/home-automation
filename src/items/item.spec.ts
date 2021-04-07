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
      expect(item.label).toBe('myItem')
      expect(item.lastChange).toBeUndefined()
      expect(item.hasValue).toBeFalsy()
      expect(item.toString()).toBe('myItem = null')
    })
    it('OnOff Item', () => {
      const item = new Item('OnOff', 'myItem')
      expect(item.label).toBe('myItem')
      expect(item.lastChange).toBeUndefined()
      expect(item.hasValue).toBeFalsy()
      expect(item.toString()).toBe('myItem = null')
    })
    it('Numeric Item', () => {
      const item = new Item('Numeric', 'myItem')
      expect(item.label).toBe('myItem')
      expect(item.lastChange).toBeUndefined()
      expect(item.hasValue).toBeFalsy()
      expect(item.toString()).toBe('myItem = null')
    })
  })

  describe('Construct initialised item', () => {
    it('OpenClosed Item', () => {
      const item = new Item('OpenClosed', 'myItem', undefined, 'OPEN', 'event', undefined, undefined, now)
      expect(item.label).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.lastValue).toBeUndefined()
      expect(item.toString()).toBe('myItem = open')
    })

    it('OnOff Item', () => {
      const item = new Item('OnOff', 'myItem', undefined, 1, 'event', undefined, undefined, now)
      expect(item.label).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.lastValue).toBeUndefined()
      expect(item.toString()).toBe('myItem = on')
    })

    it('Numeric Item', () => {
      const item = new Item('Numeric', 'myItem', undefined, 1.123, 'event', 2, 'm', now)
      expect(item.label).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.toString()).toBe('myItem = 1.12 m')
    })

    it('Integer Item', () => {
      const item = new Item('Integer', 'myItem', undefined, '-125.36', 'event', 0, 'm', now)
      expect(item.label).toBe('myItem')
      expect(item.lastChange).toBe(now)
      expect(item.hasValue).toBeTruthy()
      expect(item.toString()).toBe('myItem = -125 m')
    })
  })

  describe('change object state', () => {
    it('OpenClosed item', () => {
      const item = new Item('OpenClosed', 'myItem', undefined, 1, 'event', undefined, undefined, previously)
      item.updateStatus('closed', now)
      expect(item.lastChange).toBe(now)
      expect(item.state).toBe('closed')
      item.updateStatus('illegal', later)
      expect(item.lastChange).toBe(later)
      expect(item.state).toBe('null')
    })
    it('OpenClosed starting from undefined', () => {
      const item = new Item('OpenClosed', 'myItem', undefined, 'illegal', 'event', undefined, undefined, previously)
      expect(item.lastChange).toBeUndefined()
      item.updateStatus('closed', now)
      expect(item.lastChange).toBe(now)
      expect(item.state).toBe('closed')
    })
    it('Integer object', () => {
      const item = new Item('Integer', 'myItem', undefined, 25, 'event', undefined, undefined, previously)
      expect(item.lastChange).toBe(previously)
      expect(item.state).toBe('25')
      item.updateStatus(-13, now)
      expect(item.lastChange).toBe(now)
      expect(item.state).toBe('-13')
    })
  })
})
