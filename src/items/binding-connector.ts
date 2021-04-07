import { Item } from './item'
import { ItemChangedCallback, Primitive, UpdateType } from './core-types'

export class BindingConnector {
  private readonly _bindingLabel: string
  private readonly _bindingId: number
  private readonly _subscribedIds: string[]
  private readonly _updateToBinding: ItemChangedCallback

  constructor(id: number, label: string, updateToBinding: ItemChangedCallback) {
    this._bindingId = id
    this._bindingLabel = label
    this._updateToBinding = updateToBinding
  }

  public subscribe(itemId: string) {
    this._subscribedIds.push(itemId)
  }

  public updateToBinding(item: Item) {
    if (this._updateToBinding && this._subscribedIds.includes(item.id)) {
      this._updateToBinding(item)
    }
  }
}
