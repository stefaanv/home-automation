export type ItemValueType = string | number | undefined
export type ItemValueTypeIndicator = 'onoff' | 'openclosed' | 'numeric'

export interface IItemValue {
  hasValue(): boolean
  update(newValue: ItemValueType): boolean
  updateFrom(other: IItemValue): boolean
  readonly value: ItemValueType
  readonly typeIndicator: ItemValueTypeIndicator
  check(value: ItemValueType): boolean
  toString(): string
  clone(): IItemValue
}

export abstract class ItemValueBase implements IItemValue {
  protected _value: ItemValueType = undefined
  protected _typeIndicator: ItemValueTypeIndicator

  constructor(precision?: number, unit?: string) {
    this._value = undefined
  }

  hasValue(): boolean {
    return typeof this._value !== 'undefined'
  }

  public abstract update(newValue: ItemValueType): boolean

  updateFrom(other: IItemValue) {
    if (this._typeIndicator != other.typeIndicator) return false
    this._value = other.value
    return true
  }

  public get value() {
    return this._value
  }
  public get typeIndicator() {
    return this._typeIndicator
  }
  public abstract check(value: ItemValueType): boolean
  public abstract toString(): string
  public clone(): IItemValue {
    return { ...this }
  }
}
