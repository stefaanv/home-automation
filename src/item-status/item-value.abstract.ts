import { NumericValue } from './item-value models/numeric-value.model'
import { OnOffValue } from './item-value models/onoff-value.model'
import { OpenCloseValue } from './item-value models/openclose-value.model'

export abstract class IItemValue {
  _typeIndicator: ItemValueTypeIndicator
  protected abstract _value: string | number | undefined = undefined

  public get typeIndicator(): ItemValueTypeIndicator {
    return this._typeIndicator
  }

  hasValue(): boolean {
    return typeof this._value !== 'undefined'
  }

  updateFrom(other: OpenCloseValue) {
    this._value = other.value
  }

  public abstract get value(): string | number | undefined
  public abstract check(value: string | number): boolean
  public abstract toString(): string
  public abstract update(newValue: string | number | undefined): boolean
}

export type ItemValueTypeIndicator = 'onoff' | 'openclosed' | 'numeric'

export function ItemValueFactory(type: ItemValueTypeIndicator, precision?: number, unit?: string): IItemValue {
  switch (type) {
    case 'onoff':
      return new OnOffValue()
    case 'openclosed':
      return new OpenCloseValue()
    case 'numeric':
      return new NumericValue(precision, unit)
  }
}
