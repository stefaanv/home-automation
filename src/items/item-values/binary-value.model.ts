import { Primitive } from '../core-types'
import { ItemValueTypeIndicator } from './item-value-type-indicators'
import { ItemValue } from './item-value.model'

export type BinaryLabels = { zero: string; one: string }

export abstract class BinaryValue extends ItemValue {
  constructor(type: ItemValueTypeIndicator, pValue: Primitive) {
    super(type, pValue)
  }

  static check(pValue: Primitive, l: BinaryLabels) {
    switch (typeof pValue) {
      case 'string':
        //prettier-ignore
        return [l.zero, l.one].includes(pValue.toLocaleLowerCase())
      case 'number':
        return pValue === 0 || pValue === 1
      case 'boolean':
      case 'undefined':
        return true
      default:
        return false
    }
  }

  static toInternalValue(pValue: Primitive, l: BinaryLabels): Primitive {
    if (!BinaryValue.check(pValue, l) || pValue == undefined) return undefined

    switch (typeof pValue) {
      case 'string':
        return pValue.toLocaleLowerCase()
      case 'number':
        return pValue === 0 ? l.zero : l.one
      case 'boolean':
        return !pValue ? l.zero : l.one
      default:
        return undefined
    }
  }

  public toString(...args: any[]): string {
    if (this.value === undefined) return 'null'
    return this.value.toString()
  }
}
