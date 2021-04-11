import { Primitive } from '../core-types'
import { ItemValueTypeIndicator } from './item-value-type-indicators'
import { ItemValue } from './item-value.model'

export type BinaryValueLabels = { zero: string; one: string }

export abstract class BinaryValue extends ItemValue {
  public readonly value: string | undefined

  constructor(type: ItemValueTypeIndicator, pValue: Primitive, labels: BinaryValueLabels) {
    super(type, BinaryValue.toInternalValue(pValue, labels))
  }

  public static check(pValue: Primitive, labels: BinaryValueLabels) {
    switch (typeof pValue) {
      case 'string':
        return pValue.toLocaleLowerCase() == labels.zero || pValue.toLocaleLowerCase() == labels.one
      case 'number':
        return pValue === 0 || pValue === 1
      case 'boolean':
      case 'undefined':
        return true
      default:
        return false
    }
  }

  static toInternalValue(pValue: Primitive, labels: BinaryValueLabels) {
    if (!BinaryValue.check(pValue, labels) || pValue == undefined) return undefined

    switch (typeof pValue) {
      case 'string':
        return pValue.toLocaleLowerCase()
      case 'number':
        return pValue === 0 ? labels.zero : labels.one
      case 'boolean':
        return pValue ? labels.one : labels.zero
      default:
        return undefined
    }
  }

  public toString() {
    if (this.value === undefined) return 'null'
    return this.value
  }
}
