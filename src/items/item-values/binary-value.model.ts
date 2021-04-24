import { Primitive } from '../core-types'
import { ItemValueTypeIndicator } from './item-value-type-indicators'
import { ItemValue } from './item-value.model'
import { HasCheck } from './item-value.model'

interface HasCheckAndBinValues extends HasCheck {
  zeroLabel(): string
  oneLabel(): string
}

export interface BinaryValue extends HasCheckAndBinValues {
  check(pValue: Primitive): boolean
}
export abstract class BinaryValue extends ItemValue {
  constructor(type: ItemValueTypeIndicator, pValue: Primitive) {
    super(type, pValue)
  }

  static check(pValue: Primitive, zeroLabel: () => string, oneLabel: () => string) {
    switch (typeof pValue) {
      case 'string':
        return pValue.toLocaleLowerCase() == zeroLabel() || pValue.toLocaleLowerCase() == oneLabel()
      case 'number':
        return pValue === 0 || pValue === 1
      case 'boolean':
      case 'undefined':
        return true
      default:
        return false
    }
  }

  static toInternalValueBase(
    pValue: Primitive,
    check: (pValue: Primitive) => boolean,
    zeroLabel: () => string,
    oneLabel: () => string,
  ): Primitive {
    if (!check(pValue) || pValue == undefined) return undefined

    switch (typeof pValue) {
      case 'string':
        return pValue.toLocaleLowerCase()
      case 'number':
        return pValue === 0 ? zeroLabel() : oneLabel()
      case 'boolean':
        return !pValue ? zeroLabel() : oneLabel()
      default:
        return undefined
    }
  }

  public toString(...args: any[]): string {
    if (this.value === undefined) return 'null'
    return this.value.toString()
  }
}
