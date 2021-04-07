import { Injectable } from '@nestjs/common'
import { Item } from './item'
import { ItemChangedCallback, Primitive, UpdateType } from './core-types'
import { ItemValueTypeIndicator } from './item-values/item-value-type-indicators'
import { BindingConnector } from './binding-connector'

@Injectable()
export class ItemService {
  private _items = new Map<string, Item>()
  private _connectors = new Map<number, BindingConnector>()
  private _itemIdCounter = 0

  public declare(
    type: ItemValueTypeIndicator,
    id: string,
    label?: string,
    initialValue?: Primitive,
    updateType?: UpdateType,
    precision?: number,
    unit?: string,
    now = new Date(),
  ) {
    const item = new Item(type, id, label, initialValue, updateType, precision, unit)
    this._items.set(id, item)
  }

  public get(name: string) {
    return this._items.get(name)
  }

  public getState(name: string) {
    return this._items.get(name)?.state ?? undefined
  }

  public bind(label: string, itemChangedCallback: ItemChangedCallback) {
    const counter = this._itemIdCounter++
    const connector = new BindingConnector(counter, label, itemChangedCallback)
    this._connectors.set(counter, connector)
  }

  public subscribe(itemId: string, bindingId: number) {
    const connector = this._connectors.get(bindingId)
    if (!connector) {
      //TODO! log "connector with id ${bindingId} does not exist"
      return
    }
    connector.subscribe(itemId)
  }

  public updateFromBinding(itemId: string, newValue: Primitive) {
    const item = this._items.get(itemId)
    if (!item) {
      //TODO! log "item ${itemLabel} does not exist"
      return
    }
    const result = item.updateStatus(newValue)
    if (!result) {
      //TODO! log "Unable to update item ${itemLabel} to ${newValue}"
      return
    }
  }

  public updateToBindings(item: Item) {
    this._connectors.forEach((b) => b.updateToBinding(item))
  }
}
