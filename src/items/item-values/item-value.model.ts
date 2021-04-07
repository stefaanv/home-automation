import { Primitive } from '../core-types'
import { ItemValueTypeIndicator } from './item-value-type-indicators'

export abstract class ItemValue {
  type: ItemValueTypeIndicator
  value: Primitive | undefined

  equals(other: ItemValue): boolean {
    if (this.constructor !== other.constructor) return false
    if (this.value === undefined && other.value === undefined) return false
    if (this.value === undefined || other.value === undefined) return false
    return this.value === other.value
  }

  get hasValue() {
    return this.value != undefined
  }

  abstract toString(unit?: string, precision?: number): string
  abstract clone(): ItemValue
}
