import { Injectable } from '@nestjs/common'
import { Item } from './item'
import { IItemValue } from './item-value.interface'

@Injectable()
export class ItemStatusService {
  private _items = new Map<string, Item<any>>()

  public declare(name: string, initialState?: string | number) {
    // const item = new Item(name, initialState)
    // this._items.set(name, item)
  }

  public get(name: string) {
    return this._items.get(name)
  }
}
