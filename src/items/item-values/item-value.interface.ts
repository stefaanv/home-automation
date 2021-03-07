import { ItemValueTypeIndicator } from './item-value-type-indicators'

export type Primitive = string | number | boolean | undefined
export type PrimitiveOrUndefined = Primitive | undefined

export interface ItemValue {
  type: ItemValueTypeIndicator
  value: Primitive | undefined
  hasValue: boolean
  equals(other: ItemValue): void
  check(value: Primitive): boolean
  toString(): string
  clone(): any
}
