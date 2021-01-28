export interface IItemValue {
  type: string
  isMyType(value: IItemValue): boolean
  update(value: string | number): boolean
  toString(): string
}
