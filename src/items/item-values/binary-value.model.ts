import { ItemValueBase, Primitive } from './item-value-base.abstract'
import { ItemValueTypeIndicator } from './item-value-type-indicators'

export class BinaryValue<T_zero extends string, T_one extends string> extends ItemValueBase<T_zero | T_one | undefined> {
  constructor(private typeIndicator: ItemValueTypeIndicator, private zero_value: T_zero, private one_value: T_one) {
    super(typeIndicator)
    this.zero_value = zero_value
    this.one_value = one_value
  }

  public check(value: Primitive): boolean {
    if (typeof value === 'string') {
      return value.toLocaleLowerCase() == this.zero_value || value.toLocaleLowerCase() == this.one_value
    }
    if (typeof value === 'number') {
      return value === 0 || value === 1
    }
    if (typeof value === 'undefined') {
      return true
    }
    return false
  }

  public update(newValue: Primitive) {
    if (!this.check(newValue)) return false

    if (typeof newValue === 'undefined') {
      this._value = undefined
      return true
    }

    if (typeof newValue === 'number') {
      if (newValue !== 0 && newValue !== 1) return false
      this._value = newValue === 0 ? this.zero_value : this.one_value
      return true
    }

    if (typeof newValue === 'string') {
      this._value = newValue.toLocaleLowerCase() as T_zero | T_one
      return true
    }

    return false
  }

  public toString(): string {
    if (!this._value) return 'undefined'
    return this._value
  }

  public clone(): BinaryValue<T_zero, T_one> {
    const result = new BinaryValue<T_zero, T_one>(this.typeIndicator, this.zero_value, this.one_value)
    result._value = this._value
    return result
  }
}
