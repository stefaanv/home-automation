import { ItemChangedToBinding } from './core-types'
import { Item } from './item'
import { Coordinator } from './coordinator.service'

export abstract class Binding {
  private _coordinator: Coordinator
  abstract ItemChangedToBindingCallback(item: Item): ItemChangedToBinding
}
