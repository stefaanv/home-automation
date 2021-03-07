import { ItemValueBase, ItemValueType } from './item-value-base.abstract'

export type OnOffValueType = 'on' | 'off' | undefined

//TODO OnOff en OpenClosed samenvoegen met 2 extra generics
export class OnOffValue extends ItemValueBase<OnOffValueType> {
  constructor() {
    super('OnOff')
  }

  check(value: ItemValueType): boolean {
    if (typeof value == 'string') {
      return value.toLocaleLowerCase() == 'on' || value.toLocaleLowerCase() == 'off'
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
      if (newValue == 0) this._value = 'off'
      this._value = 'on'
    }

    const lc = newValue.toString().toLocaleLowerCase()
    if (lc !== 'on' && lc !== 'off') return false
    this._value = lc
  }

  public toString(): string {
    return this._value.toString()
  }
}
