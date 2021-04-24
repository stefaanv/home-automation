import { Primitive } from '../core-types'
import { BinaryValue } from './binary-value.model'

export class OnOffValue extends BinaryValue {
  static zeroLabel() {
    return 'off'
  }
  static oneLabel() {
    return 'on'
  }

  static check(pValue: Primitive) {
    return BinaryValue.check(pValue, OnOffValue.zeroLabel, OnOffValue.oneLabel)
  }

  toInternalValue(pValue: Primitive) {
    return BinaryValue.toInternalValueBase(pValue, OnOffValue.check, OnOffValue.zeroLabel, OnOffValue.oneLabel)
  }

  constructor(pValue?: Primitive) {
    super('OnOff', pValue)
  }

  public clone() {
    return new OnOffValue(this.value)
  }
}
