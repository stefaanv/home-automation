import { Primitive } from '../core-types'
import { BinaryValue, BinaryValueLabels } from './binary-value.model'
import { ItemValue } from './item-value.model'

export class OnOffValue extends BinaryValue {
  static labels: BinaryValueLabels

  constructor(value?: Primitive) {
    super('OnOff', value, OnOffValue.labels)
  }

  public equals(other: ItemValue | Primitive) {
    if (other instanceof ItemValue) {
      return super.equals(other)
    } else {
      const pValue = other as Primitive
      return this.value == BinaryValue.toInternalValue(pValue, OnOffValue.labels)
    }
  }

  public static check(pValue: Primitive) {
    return BinaryValue.check(pValue, OnOffValue.labels)
  }

  public static initialize() {
    OnOffValue.labels = { zero: 'off', one: 'on' }
  }

  public clone() {
    return new OnOffValue(this.value)
  }
}

OnOffValue.initialize()
