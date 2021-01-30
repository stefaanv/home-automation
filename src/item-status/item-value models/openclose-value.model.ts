import { ItemValueBase } from '../item-value-base.abstract'
import { ValueDtt } from './numeric-value.model'
type OpenClosedValueType = 'open' | 'closed' | undefined

export class OpenCloseValue extends ItemValueBase {
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

  update(newValue: ValueDtt): boolean {
    let nv: OpenClosedValueType | null

    if (typeof newValue == 'undefined') {
      nv = undefined
    }

    if (typeof newValue == 'number') {
      if (newValue == 0) nv = 'closed'
      else nv = 'open'
    }

    if (typeof newValue == 'string') {
      const lc = newValue.toLowerCase()
      if (lc == 'open' || lc == 'closed') {
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
    return this._value
  }
}
