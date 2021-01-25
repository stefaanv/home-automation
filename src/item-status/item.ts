import { ItemValueType } from './item-value.type'

export class Item<T extends ItemValueType> {
  //#region properties
  private _lastChange: Date
  private _state: T | undefined
  private _previousState: T | undefined
  private _name: string
  //#endregion

  //#region getters
  public get name(): string {
    return this._name
  }

  public get lastChange(): Date {
    return this._lastChange
  }

  public get state(): T {
    return this._state
  }

  public get previousState(): T {
    return this._previousState
  }
  //#endregion

  constructor(name: string, initialState?: T) {
    this._lastChange = new Date()
    this._state = initialState
    this._name = name
  }

  public clone(): Item<T> {
    return { ...this }
  }

  public UpdateStatus(newValue: ItemValueType) {
    T.
    if (!Text.(newValue)) {
      console.error(`${newValue} is not of expected type, not udating`)
    }
  }
}
