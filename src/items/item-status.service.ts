import { Injectable } from '@nestjs/common'
import { Item } from './item'
import { Primitive } from './item-values/item-value.model'
import { ItemValueTypeIndicator } from './item-values/item-value-type-indicators'

@Injectable()
export class ItemStatusService {
  // private _items = new Map<string, Item>()
  // public declare(name: string, type: ItemValueTypeIndicator, initialState?: Primitive, precision?: number, unit?: string) {
  //   const item = new Item(name, type, initialState, precision, unit)
  //   this._items.set(name, item)
  // }
  // public get(name: string) {
  //   return this._items.get(name)
  // }
  // public getState(name: string) {
  //   return this._items.get(name)?.state ?? undefined
  // }
}
