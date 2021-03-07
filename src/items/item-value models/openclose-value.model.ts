import { ItemValueBase, ItemValueType } from './item-value-base.abstract'

export type OpenClosedValueType = 'open' | 'closed' | undefined

export class OpenCloseValue extends ItemValueBase<OpenClosedValueType> {
  constructor() {
    super('OpenClosed')
  }

  check(value: ItemValueType): boolean {
    if (typeof value == 'string') {
      return value.toLocaleLowerCase() == 'open' || value.toLocaleLowerCase() == 'closed'
    }
    if (typeof value == 'number') {
      return value == 0 || value == 1
    }
    if (typeof value == 'undefined') {
      return true
    }
    return false
  }

  update(newValue: ItemValueType) {
    if (!this.check(newValue)) return false

    if (typeof newValue == 'undefined') {
      this._value = undefined
      return true
    }

    if (typeof newValue == 'number') {
      if (newValue !== 0 && newValue !== 1) return false
      if (newValue == 0) this._value = 'closed'
      this._value = 'open'
    }

    const lc = newValue.toString().toLocaleLowerCase()
    if (lc !== 'open' && lc !== 'closed') return false
    this._value = lc
  }

  public toString(): string {
    return this._value
  }
}
