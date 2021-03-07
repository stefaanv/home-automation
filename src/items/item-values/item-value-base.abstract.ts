import { ItemValueTypeIndicator } from './item-value-type-indicators'

export type Primitive = string | number | boolean | undefined
export type PrimitiveOrUndefined = Primitive | undefined

export interface ItemValue {
  type: ItemValueTypeIndicator
  value: Primitive | undefined
  hasValue: boolean
  updateFrom(other: ItemValue): void
  update(newValue: Primitive): boolean
  equals(other: ItemValue): void
  clear(): void
  check(value: Primitive): boolean
  toString(): string
  clone(): any
}

export abstract class ItemValueBase<T extends Primitive> implements ItemValue {
  protected _value: T | undefined = undefined
  public type: ItemValueTypeIndicator

  constructor(typeIndicator: ItemValueTypeIndicator, precision?: number, unit?: string) {
    this._value = undefined
    this.type = typeIndicator
  }

  public get hasValue(): boolean {
    return typeof this._value !== 'undefined'
  }

  public abstract update(newValue: Primitive): boolean

  public equals(other: ItemValue) {
    if (this.type !== other.type) return false
    return this._value == other.value
  }

  public updateFrom(other: ItemValue) {
    if (other.type != this.type) return false
    return this.update(other.value)
  }

  public clear() {
    this._value = undefined
  }

  public get value(): T | undefined {
    return this._value
  }

  /**
   * Check if the passed value is valid
   */
  public abstract check(value: Primitive): boolean

  public abstract toString(): string

  clone() {
    return { ...this }
  }
}
