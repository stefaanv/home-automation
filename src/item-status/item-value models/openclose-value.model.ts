import { IItemValue, ItemValueTypeIndicator } from '../item-value.abstract'
type OpenClosedValueType = 'open' | 'closed' | undefined

export class OpenCloseValue extends IItemValue {
  protected _value: OpenClosedValueType

  constructor() {
    super()
    this._typeIndicator = 'openclosed'
    this._value = undefined
  }

  public get value(): OpenClosedValueType {
    return this._value
  }

  check(value: string | number | undefined): boolean {
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

  update(newValue: string | number | undefined): boolean {
    if (typeof newValue == 'undefined') {
      this._value = undefined
    }
    if (typeof newValue == 'number') {
      if (newValue == 0) this._value = 'closed'
      else this._value = 'open'
      return true
    }
    switch (newValue) {
      case 'open':
      case 'OPEN':
      case 'Open': {
        this._value = 'open'
        return true
      }
      case 'closed':
      case 'CLOSED':
      case 'Closed': {
        this._value = 'closed'
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
