import { ItemValueBase, ItemValueType, ItemValueTypeIndicator, IItemValue } from './item-value-base.abstract'

export interface IItem {
  readonly name: string
  readonly lastChange: Date
  readonly state: IItemValue
  readonly previousState: IItemValue
  updateStatus(newValue: ItemValueType): boolean
}

export class Item<T extends ItemValueBase> {
  //#region properties
  private _lastChange: Date | undefined
  private _state: T
  private _previousState: T
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

  public get typeIndicator(): ItemValueTypeIndicator {
    return this._state.typeIndicator
  }
  //#endregion

  constructor(
    valueType: { new (precision?: number, unit?: string): T },
    name: string,
    initialStateValue?: ItemValueType,
    precision?: number,
    unit?: string,
  ) {
    this._state = new valueType(precision, unit)
    this._previousState = new valueType(precision, unit)
    if (initialStateValue && this._state.check(initialStateValue)) {
      this._lastChange = new Date()
      this._state.update(initialStateValue)
    } else {
      this._lastChange = undefined
      this._state = undefined
    }
    this._name = name
  }

  public updateStatus(newValue: ItemValueType): boolean {
    if (!this._state.check(newValue)) return false
    const current = this.state.clone()
    if (this._state.update(newValue)) {
      this._previousState.updateFrom(current)
      this._lastChange = new Date()
    }
  }

  public toString(): string {
    return this._state.toString()
  }
}
