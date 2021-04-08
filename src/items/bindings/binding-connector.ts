import { Item } from '../item'
import { ItemChangedToBinding, Primitive, UpdateType } from '../core-types'
import match from 'mqtt-match'

export class BindingConnector {
  private readonly _bindingLabel: string
  private readonly _bindingId: number
  private readonly _topicMatchers: string[]
  private readonly _updateToBinding: ItemChangedToBinding

  constructor(id: number, label: string, updateToBinding: ItemChangedToBinding) {
    this._bindingId = id
    this._bindingLabel = label
    this._updateToBinding = updateToBinding
  }

  public subscribe(matcher: string) {
    this._topicMatchers.push(matcher)
  }

  public async updateToBinding(item: Item) {
    if (this._updateToBinding) {
      for await (let matcher of this._topicMatchers) {
        if (match(matcher, item.topic)) this._updateToBinding(item)
      }
    }
  }
}
