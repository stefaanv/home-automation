import { IItemValue, ItemValueTypeIndicator } from '../item-value.abstract'

export class NumericValue extends IItemValue {
  protected _value: number | undefined
  private _unit: string
  private _precision: number

  constructor(precision?: number, unit?: string) {
    super()
    this._typeIndicator = 'numeric'
    this._value = undefined
    this._precision = precision ?? 3
    this._unit = unit ?? ''
  }

  public get value(): number | undefined {
    return this._value
  }

  check(value: string | number | undefined): boolean {
    if (typeof value == 'string') {
      return !isNaN(parseFloat(value))
    }
    if (typeof value == 'number') {
      return true
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
      this._value = newValue
      return true
    }
    if (typeof newValue == 'string') {
      this._value = parseFloat(newValue)
      return true
    }
    return true
  }

  public toString(): string {
    if (!this._value) {
      return 'undefined'
    }
    return this._value.toFixed(this._precision) + ' ' + this._unit
  }
}
