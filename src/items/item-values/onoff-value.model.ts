import { Primitive } from '../core-types'
import { BinaryLabels, BinaryValue } from './binary-value.model'

export class OnOffValue extends BinaryValue {
  static readonly labels: BinaryLabels = { zero: 'off', one: 'on' }

  toInternalValue(pValue: Primitive) {
    return BinaryValue.toInternalValue(pValue, OnOffValue.labels)
  }

  static check(pValue: Primitive) {
    return BinaryValue.check(pValue, OnOffValue.labels)
  }

  constructor(pValue?: Primitive) {
    super('OnOff', pValue)
  }

  public clone() {
    return new OnOffValue(this.value)
  }
}
