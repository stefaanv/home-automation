import { Primitive } from './item-value.interface'
import { ItemValueTypeIndicator } from './item-value-type-indicators'

export class BinaryValue<T_zero extends string, T_one extends string> {
  constructor(
    readonly type: ItemValueTypeIndicator,
    public readonly value: T_zero | T_one | undefined,
    private readonly zero_value: T_zero,
    private readonly one_value: T_one,
  ) {
    if (typeof value === 'number') {
      if (value !== 0 && value !== 1) {
        this.value = undefined
      } else {
        this.value = value === 0 ? this.zero_value : this.one_value
      }
    } else if (typeof value === 'string') {
      this.value = value.toLocaleLowerCase() as T_zero | T_one
    } else {
      this.value = undefined
    }
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

  public toString(): string {
    if (this.value === undefined) return 'null'
    return this.value
  }

  public clone(): BinaryValue<T_zero, T_one> {
    return new BinaryValue<T_zero, T_one>(this.type, this.value, this.zero_value, this.one_value)
  }

  public equals(other: ItemValue): boolean {
    if (this.type !== other.type) return false
    return this.value === other.value
  }
}
