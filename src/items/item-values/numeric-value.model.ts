import { ItemValueBase, Primitive } from './item-value-base.abstract'

export class NumericValue extends ItemValueBase<number> {
  private _unit: string
  private _precision: number

  constructor(precision?: number, unit?: string) {
    super('Numeric')
    this._precision = precision ?? 3
    this._unit = unit ?? ''
  }

  check(value: Primitive): boolean {
    if (typeof value === 'string') {
      return !isNaN(parseFloat(value))
    }
    if (typeof value === 'number') {
      return true
    }
    if (typeof value === 'undefined') {
      return true
    }
    return false
  }

  update(newValue: Primitive): boolean {
    if (!this.check(newValue)) return false

    if (typeof newValue === 'undefined') {
      this._value = undefined
      return true
    }

    if (typeof newValue === 'number') {
      this._value = newValue
      return true
    }

    if (typeof newValue === 'string') {
      this._value = parseFloat(newValue)
      return true
    }

    return false
  }

  public toString(): string {
    if (!this._value) {
      return 'undefined'
    }
    return this._value.toFixed(this._precision) + (this._unit ? ' ' + this._unit : '')
  }
}
