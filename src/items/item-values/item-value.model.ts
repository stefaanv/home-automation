import { Primitive } from '../core-types'
import { ItemValueTypeIndicator } from './item-value-type-indicators'

// volgens https://github.com/microsoft/TypeScript/issues/13462

export abstract class ItemValue {
  readonly type: ItemValueTypeIndicator
  protected readonly _value: Primitive
  public get value() {
    return this._value
  }

  constructor(type: ItemValueTypeIndicator, pValue: Primitive) {
    this.type = type
    this._value = this.toInternalValue(pValue)
  }

  equals(other: ItemValue): boolean {
    if (this.constructor.name !== other.constructor.name) return false
    return this.equalsPrimitive(other.value)
  }

  equalsPrimitive(other: Primitive) {
    return this.value === this.toInternalValue(other)
  }

  get hasValue() {
    return this.value != undefined
  }

  abstract toString(...args: any[]): string
  abstract clone(): ItemValue
  protected abstract toInternalValue(pValue: Primitive): Primitive
}
