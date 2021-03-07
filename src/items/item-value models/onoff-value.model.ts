import { ItemValueBase, ItemValue } from './item-value-base.abstract'

type OnOffValueType = 'on' | 'off' | undefined

export class OnOffValue extends ItemValueBase {
  protected _value: OnOffValueType

  constructor() {
    super()
    this._typeIndicator = 'onoff'
  }

  check(value: ItemValue): boolean {
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

  update(newValue: ItemValue): boolean {
    let nv: OnOffValueType | null

    if (typeof newValue == 'undefined') {
      nv = undefined
    }

    if (typeof newValue == 'number') {
      if (newValue == 0) nv = 'off'
      else nv = 'on'
    }

    if (typeof newValue == 'string') {
      const lc = newValue.toLowerCase()
      if (lc == 'on' || lc == 'off') {
        nv = lc
      }
    }

    if (nv == null || nv == this._value) {
      return false
    }
    this._value = nv
    return true
  }

  public toString(): string {
    return this._value.toString()
  }
}
