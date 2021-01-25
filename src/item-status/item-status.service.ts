import { Injectable } from '@nestjs/common'
import { Item } from './item'
import { ItemValueType } from './item-value.type'

@Injectable()
export class ItemStatusService {
  private _items = new Map<string, Item<any>>()

  public declare<T extends ItemValueType>(name: string, initialState?: T) {
    const item = new Item(name, initialState)
    this._items.set(name, item)
  }

  public get(name: string) {
    return this._items.get(name)
  }
}
