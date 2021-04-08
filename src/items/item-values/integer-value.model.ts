import { Primitive } from '../core-types'
import { NumericValue } from './numeric-value.model'

export class IntegerValue extends NumericValue {
  constructor(pValue?: Primitive) {
    if (!IntegerValue.check(pValue)) {
      super(undefined)
    } else {
      super(IntegerValue.toInternalValue(pValue))
    }
  }

  public static check(pValue: Primitive): boolean {
    return (typeof pValue == 'string' && !isNaN(parseInt(pValue))) || (typeof pValue == 'number' && Number.isInteger(pValue))
  }

  static toInternalValue(pValue: Primitive): number | undefined {
    if (!NumericValue.check(pValue) || pValue == undefined) return undefined

    switch (typeof pValue) {
      case 'string':
        return parseInt(pValue as string)
      case 'number':
        return pValue
      case 'boolean':
      default:
        return undefined
    }
  }
}
