import { Injectable } from '@nestjs/common'
import { Item } from './item'
import { ItemChangedToBinding, ItemChangedToCoordinator, Primitive, UpdateType } from './core-types'
import { ItemValueTypeIndicator } from './item-values/item-value-type-indicators'
import { BindingConnector } from './bindings/binding-connector'
import { LogFacade } from '../logging/log-facade'

@Injectable()
export class Coordinator {
  private _items = new Map<string, Item>()
  private _connectors = new Map<number, BindingConnector>()
  private _itemIdCounter = 0
  private _log: LogFacade

  constructor(log: LogFacade) {
    this._log = log.child('coordinator')
  }

  public declare(
    type: ItemValueTypeIndicator,
    topic: string,
    label?: string,
    initialValue?: Primitive,
    updateType?: UpdateType,
    precision?: number,
    unit?: string,
    now = new Date(),
  ) {
    const item = new Item(type, topic, label, initialValue, updateType, precision, unit)
    this._items.set(topic, item)
  }

  public get(name: string) {
    return this._items.get(name)
  }

  public getState(name: string) {
    return this._items.get(name)?.state ?? undefined
  }

  public bind(label: string, itemChangedCallback: ItemChangedToBinding) {
    const counter = this._itemIdCounter++
    const connector = new BindingConnector(counter, label, itemChangedCallback)
    this._connectors.set(counter, connector)
  }

  public subscribe(topic: string, bindingId: number) {
    const connector = this._connectors.get(bindingId)
    if (!connector) {
      this._log.error(`connector with id ${bindingId} does not exist`, '1aa38')
      return
    }
    connector.subscribe(topic)
  }

  public updateFromBinding: ItemChangedToCoordinator = (topic, newValue) => {
    const item = this._items.get(topic)
    if (!item) {
      this._log.warn(`item '${topic}' does not exist`, '381b8')
      return
    }
    const result = item.updateStatus(newValue)
    if (!result) {
      this._log.warn(`Unable to update item ${topic} to ${newValue}`, '381b8')
      return
    }
  }

  public updateToBindings(item: Item) {
    this._connectors.forEach((b) => b.updateToBinding(item))
  }
}
