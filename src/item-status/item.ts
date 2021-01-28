import { IItemValue } from './item-value.interface'

function create<T>(c: {new(): T; }): T {
  return new c();
}
export class Item<T extends IItemValue> {
  //#region properties
  private _lastChange: Date | undefined
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
  private activator<T extends IItemValue>(type: { new(): T ;} ): T {
    return new type();
}
  constructor(name: string, initialState?: string|number) {
    this._previousState = undefined
    if (initialState){
      this._lastChange = new Date()
      this._state = this.activator(T)
    } else {}
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
