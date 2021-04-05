import { BinaryValue, BinaryValueLabels } from './binary-value.model'
import { ItemValue, Primitive } from './item-value.model'

export class OpenClosedValue extends BinaryValue {
  static labels: BinaryValueLabels

  constructor(value?: Primitive) {
    super(OpenClosedValue.labels, value)
  }
  public equals(other: ItemValue | Primitive) {
    if (other instanceof ItemValue) {
      return super.equals(other)
    } else {
      const pValue = other as Primitive
      return this.value == BinaryValue.toInternalValue(pValue, OpenClosedValue.labels)
    }
  }

  public static check(pValue: Primitive) {
    return BinaryValue.check(pValue, OpenClosedValue.labels)
  }

  public static initialize() {
    OpenClosedValue.labels = { zero: 'closed', one: 'open' }
  }

  public clone(): BinaryValue {
    return new OpenClosedValue(this.value)
  }
}

OpenClosedValue.initialize()
