import { Primitive } from '../core-types'
import { NumericValue } from './numeric-value.model'

export class IntegerValue extends NumericValue {
  static check(pValue: Primitive): boolean {
    // prettier-ignore
    return (typeof pValue == 'string' && !isNaN(parseInt(pValue))) 
      || (typeof pValue == 'number' && Number.isInteger(pValue))
  }

  toInternalValue(pValue: Primitive): number | undefined {
    if (!IntegerValue.check(pValue) || pValue == undefined) return undefined

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
