import { Injectable } from '@nestjs/common'
import { Item } from './item'
import { ItemValueBase, ItemValueTypeIndicator } from './item-value-base.abstract'

@Injectable()
export class ItemStatusService {
  private _items = new Map<string, Item>()

  public declare(name: string, type: ItemValueTypeIndicator, initialState?: string | number) {
    const item = new Item(type, name, initialState)
    this._items.set(name, item)
  }

  public get(name: string) {
    return this._items.get(name)
  }
}
