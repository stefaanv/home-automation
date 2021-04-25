import { Primitive } from '../core-types'
import { BinaryLabels, BinaryValue } from './binary-value.model'

export class OpenClosedValue extends BinaryValue {
  static readonly labels: BinaryLabels = { zero: 'closed', one: 'open' }

  toInternalValue(pValue: Primitive) {
    return BinaryValue.toInternalValue(pValue, OpenClosedValue.labels)
  }

  static check(pValue: Primitive) {
    return BinaryValue.check(pValue, OpenClosedValue.labels)
  }

  constructor(pValue?: Primitive) {
    super('OpenClosed', pValue)
  }

  public clone() {
    return new OpenClosedValue(this.value)
  }
}
