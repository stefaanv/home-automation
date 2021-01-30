import { ItemValueBase, ItemValueTypeIndicator } from '../item-value-base.abstract'

export type ValueDtt = string | number | undefined

export class NumericValue extends ItemValueBase {
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

  check(value: ValueDtt): boolean {
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

  update(newValue: ValueDtt): boolean {
    let nv: number | undefined | null = null

    if (typeof newValue == 'undefined') {
      nv = undefined
    }
    if (typeof newValue == 'number') {
      nv = newValue
    }
    if (typeof newValue == 'string') {
      nv = parseFloat(newValue)
    }
    if (nv == null || nv == this._value) {
      return false
    }
    this._value = nv
    return true
  }

  public toString(): string {
    if (!this._value) {
      return 'undefined'
    }
    return this._value.toFixed(this._precision) + ' ' + this._unit
  }
}
