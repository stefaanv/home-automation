import { IItemValue } from './item-value.interface'

interface IItemValueBuilder<T extends IItemValue> {
  new (): T
  parse(value: any): IItemValue
}
