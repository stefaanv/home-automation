import { OpenClosedValueType } from './openclose-value.model'
import { OnOffValueType } from './onoff-value.model'

export type ItemValueType = OnOffValueType | OpenClosedValueType | number | undefined
export type ItemValueTypeIndicators = 'OnOff' | 'OpenClosed' | 'Numeric'

export abstract class ItemValueBase<T extends ItemValueType> {
  protected _value: T = undefined
  public type: ItemValueTypeIndicators

  constructor(typeIndicator: ItemValueTypeIndicators, precision?: number, unit?: string) {
    this._value = undefined
    this.type = typeIndicator
  }

  hasValue(): boolean {
    return typeof this._value !== 'undefined'
  }

  public abstract update(newValue: T): boolean

  updateFrom(other: ItemValueBase<T>) {
    if (other.type != this.type) return false
    this._value = other._value
    return true
  }

  public get value() {
    return this._value
  }

  /**
   * Check if the passed value is valid
   */
  public abstract check(value: ItemValueType): boolean

  public abstract toString(): string

  public clone(): ItemValueBase<T> {
    return { ...this }
  }
}
