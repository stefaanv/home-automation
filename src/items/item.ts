import { ItemValue } from './item-values/item-value.model'
import { Primitive, UpdateType } from './core-types'
import { itemValueFactory, checkValue } from './item-values/item-value-factory'
import { ItemValueTypeIndicator } from './item-values/item-value-type-indicators'

export class Item {
  //#region properties
  private _lastChange: Date | undefined = undefined
  private _state: ItemValue
  private _previousState: ItemValue
  private readonly _updateType: UpdateType
  private readonly _type: ItemValueTypeIndicator
  private readonly _label: string
  private readonly _id: string
  private readonly _precision: number | undefined
  private readonly _unit: string | undefined
  //#endregion

  //#region getters
  public get label(): string {
    return this._label
  }

  public get id(): string {
    return this._id
  }

  public get lastValue(): Primitive {
    return this._previousState.value
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

  public get hasValue() {
    return this._state.hasValue
  }
  //#endregion

  constructor(
    type: ItemValueTypeIndicator,
    id: string,
    label?: string,
    initialStateValue?: Primitive,
    updateType?: UpdateType,
    precision?: number,
    unit?: string,
    now = new Date(),
  ) {
    this._type = type
    this._id = id
    this._label = label ?? id
    this._state = itemValueFactory(type, initialStateValue)
    this._updateType = updateType ?? 'event'
    this._previousState = itemValueFactory(type, undefined)
    this._lastChange = this._state.hasValue ? now : undefined
    this._precision = precision
    this._unit = unit
  }

  public updateStatus(newValue: Primitive, now = new Date()): boolean {
    const current = this._state
    this._state = itemValueFactory(this._type, newValue)
    this._previousState = current
    this._lastChange = now
    return true
  }

  public toString(): string {
    return `${this._label ?? this.id} = ${this._state.toString(this._unit, this._precision)}`
  }
}
