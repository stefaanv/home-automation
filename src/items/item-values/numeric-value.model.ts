import { Primitive } from '../core-types'
import { ItemValue } from './item-value.model'

export class NumericValue extends ItemValue {
  private _unit?: string
  private _precision?: number

  constructor(pValue?: Primitive, unit = '', precision = 0) {
    super('Numeric', pValue)
  }

  static check(pValue: Primitive): boolean {
    switch (typeof pValue) {
      case 'string':
        return !isNaN(parseFloat(pValue as string))
      case 'number':
      case 'undefined':
        return true
      case 'boolean':
      default:
        return false
    }
  }

  toInternalValue(pValue: Primitive): number | undefined {
    if (!NumericValue.check(pValue) || pValue == undefined) return undefined

    switch (typeof pValue) {
      case 'string':
        return parseFloat(pValue as string)
      case 'number':
        return pValue
      case 'boolean':
      default:
        return undefined
    }
  }

  public toString(unit?: string, precision?: number): string {
    if (!this.value) return 'null'
    return (this.value as number).toFixed(precision) + (unit ? ' ' + unit : '')
  }

  public clone(): NumericValue {
    return new NumericValue(this.value)
  }
}
