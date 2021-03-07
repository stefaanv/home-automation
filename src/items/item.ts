import { ItemValue, Primitive } from './item-values/item-value.interface'
import { itemValueFactory } from './item-values/item-value-factory'
import { ItemValueTypeIndicator } from './item-values/item-value-type-indicators'

export class Item {
  //#region properties
  private _lastChange: Date | undefined = undefined
  private _state: ItemValue
  private _previousState: ItemValue
  private _name: string
  //#endregion

  //#region getters
  public get name(): string {
    return this._name
  }

  public get lastChange(): Date | undefined {
    return this._lastChange
  }

  public get state(): string {
    if (!this._state.hasValue) return 'null'
    return this._state.toString()
  }

  public get previousState(): string {
    if (!this._previousState.hasValue) return 'null'
    return this._previousState.toString()
  }

  public get typeIndicator(): ItemValueTypeIndicator {
    return this._state.type
  }
  //#endregion

  constructor(name: string, type: ItemValueTypeIndicator, initialStateValue?: Primitive, precision?: number, unit?: string) {
    this._state = itemValueFactory(type, precision, unit)
    this._previousState = itemValueFactory(type, precision, unit)
    if (initialStateValue && this._state.check(initialStateValue)) {
      this._lastChange = new Date()
      this._state.update(initialStateValue)
    } else {
      this._lastChange = undefined
    }
    this._name = name
  }

  public updateStatus(newValue: Primitive): boolean {
    if (!this._state.check(newValue)) return false
    const current = this._state.clone()
    if (this._state.update(newValue)) {
      this._previousState = current
      this._lastChange = new Date()
      return true
    }
    return false
  }

  public toString(): string {
    return this._state.toString()
  }
}
