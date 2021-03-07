import { ItemValueBase, ItemValue } from './item-value-base.abstract'

export class NumericValue extends ItemValueBase {
  protected _value: number | undefined = undefined
  private _unit: string
  private _precision: number

  constructor(precision?: number, unit?: string) {
    super()
    this._precision = precision ?? 3
    this._unit = unit ?? ''
    this._typeIndicator = 'numeric'
  }

  check(value: ItemValue): boolean {
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

  update(newValue: ItemValue): boolean {
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
