import { Item } from './item'

describe('OpenClosed ItemValue', () => {
  let itemWithInitialValue: Item
  let itemWithoutInitialValue: Item

  beforeEach(() => {
    itemWithInitialValue = new Item('myItem', 'OpenClosed', 'open')
    itemWithoutInitialValue = new Item('myItem', 'OpenClosed')
  })

  describe('initial object name', () => {
    it('should be "myItem"', () => {
      expect(itemWithInitialValue.name).toBe('myItem')
      expect(itemWithoutInitialValue.name).toBe('myItem')
    })
  })

  describe('initial object lastChange', () => {
    it('should be undefined/Date', () => {
      expect(itemWithInitialValue.lastChange).toBeDefined()
      expect(itemWithInitialValue.lastChange).toBeInstanceOf(Date)
      expect(itemWithoutInitialValue.lastChange).toBeUndefined()
    })
  })

  describe('initial object state', () => {
    it('should be undefined/open', () => {
      expect(itemWithInitialValue.state).toBe('open')
      expect(itemWithoutInitialValue.state).toBe('null')
    })
  })

  describe('initial object previousState', () => {
    it('should be undefined', () => {
      expect(itemWithInitialValue.previousState).toBe('null')
      expect(itemWithoutInitialValue.previousState).toBe('null')
    })
  })
})
