import { NumericValue, ValueDtt } from './item-value models/numeric-value.model'
import { OnOffValue } from './item-value models/onoff-value.model'
import { OpenCloseValue } from './item-value models/openclose-value.model'

export abstract class ItemValueBase {
  _typeIndicator: ItemValueTypeIndicator
  protected abstract _value: ValueDtt = undefined

  public get typeIndicator(): ItemValueTypeIndicator {
    return this._typeIndicator
  }

  hasValue(): boolean {
    return typeof this._value !== 'undefined'
  }

  updateFrom(other: ItemValueBase) {
    this._value = other.value
  }

  public abstract get value(): ValueDtt
  public abstract check(value: string | number): boolean
  public abstract toString(): string
  public abstract update(newValue: ValueDtt): boolean
  public clone(): ItemValueBase {
    return { ...this }
  }
}

export type ItemValueTypeIndicator = 'onoff' | 'openclosed' | 'numeric'

export function ItemValueFactory(type: ItemValueTypeIndicator, precision?: number, unit?: string): ItemValueBase {
  switch (type) {
    case 'onoff':
      return new OnOffValue()
    case 'openclosed':
      return new OpenCloseValue()
    case 'numeric':
      return new NumericValue(precision, unit)
  }
}
