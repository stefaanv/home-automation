import { ItemValueBase as ItemValueBase, ItemValueFactory, ItemValueTypeIndicator } from './item-value-base.abstract'
export class Item {
  //#region properties
  private _typeIndicator: ItemValueTypeIndicator
  private _lastChange: Date | undefined
  private _state: ItemValueBase
  private _previousState: ItemValueBase
  private _name: string
  //#endregion

  //#region getters
  public get name(): string {
    return this._name
  }

  public get lastChange(): Date {
    return this._lastChange
  }

  public get state(): ItemValueBase {
    return this._state
  }

  public get previousState(): ItemValueBase {
    return this._previousState
  }
  //#endregion

  constructor(type: ItemValueTypeIndicator, name: string, initialStateValue?: string | number | undefined) {
    this._typeIndicator = type
    this._state = ItemValueFactory(type)
    this._previousState = ItemValueFactory(type)
    if (initialStateValue && this._state.check(initialStateValue)) {
      this._lastChange = new Date()
      this._state.update(initialStateValue)
    } else {
      this._lastChange = undefined
      this._state = undefined
    }
    this._name = name
  }

  public UpdateStatus(newValue: string | number | undefined): boolean {
    if (!this._state.check(newValue)) return false
    this._previousState.updateFrom(this._state)
    this._state.update(newValue)
    this._lastChange = new Date()
  }
}
