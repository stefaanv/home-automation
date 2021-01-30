import { IItemValue, ItemValueTypeIndicator } from '../item-value.abstract'
type OnOffValueType = 'on' | 'off' | undefined

export class OnOffValue extends IItemValue {
  protected _value: OnOffValueType

  constructor() {
    super()
    this._typeIndicator = 'onoff'
    this._value = undefined
  }

  public get value(): OnOffValueType {
    return this._value
  }

  check(value: string | number | undefined): boolean {
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

  update(newValue: string | number | undefined): boolean {
    if (typeof newValue == 'undefined') {
      this._value = undefined
    }
    if (typeof newValue == 'number') {
      if (newValue == 0) this._value = 'off'
      else this._value = 'on'
      return true
    }
    switch (newValue) {
      case 'on':
      case 'ON':
      case 'On': {
        this._value = 'on'
        return true
      }
      case 'off':
      case 'OFF':
      case 'Off': {
        this._value = 'off'
        return true
      }
      default:
        return false
    }
  }

  public toString(): string {
    return this._value
  }
}
