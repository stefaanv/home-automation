import { Injectable } from '@nestjs/common'
import { Item, IItem } from './item'
import { ItemValueBase, ItemValueType, ItemValueTypeIndicator } from './item-value models/item-value-base.abstract'

@Injectable()
export class ItemStatusService {
  private _items = new Map<string, IItem>()
  public declare(
    type: { new (precision?: number, unit?: string) },
    name: string,
    initialState?: ItemValueType,
    precision?: number,
    unit?: string,
  ) {
    const item = new Item(type, name, initialState, precision, unit)
    this._items.set(name, item)
  }

  public get(name: string) {
    return this._items.get(name)
  }

  public getState(name: string) {
    return this._items.get(name).state
  }
}
