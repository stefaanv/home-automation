import { ItemChangedCallback } from './core-types'
import { Item } from './item'
import { Coordinator } from './item.service'

export abstract class Binding {
  private _coordinator: Coordinator
  abstract updateFromCoordinator(item: Item): ItemChangedCallback
}
