import { Primitive } from '../core-types'
import { BinaryValue } from './binary-value.model'

export class OpenClosedValue extends BinaryValue {
  static zeroLabel() {
    return 'closed'
  }
  static oneLabel() {
    return 'open'
  }

  static check(pValue: Primitive) {
    return BinaryValue.check(pValue, OpenClosedValue.zeroLabel, OpenClosedValue.oneLabel)
  }

  toInternalValue(pValue: Primitive) {
    return BinaryValue.toInternalValueBase(
      pValue,
      OpenClosedValue.check,
      OpenClosedValue.zeroLabel,
      OpenClosedValue.oneLabel,
    )
  }

  constructor(pValue?: Primitive) {
    super('OpenClosed', pValue)
  }

  public clone() {
    return new OpenClosedValue(this.value)
  }
}
