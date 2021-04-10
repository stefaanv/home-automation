import { ItemValue } from './item-value.model'
import { ItemValueTypeIndicator } from './item-value-type-indicators'
import { NumericValue } from './numeric-value.model'
import { OnOffValue } from './onoff-value.model'
import { OpenClosedValue } from './openclose-value.model'
import { IntegerValue } from './integer-value.model'
import { Primitive } from '../core-types'

export function itemValueFactory(type: ItemValueTypeIndicator, value: Primitive): ItemValue {
  switch (type) {
    case 'Numeric':
      return new NumericValue(value)
    case 'Integer':
      return new IntegerValue(value)
    case 'OnOff':
      return new OnOffValue(value)
    case 'OpenClosed':
      return new OpenClosedValue(value)
  }
}

export function checkValue(type: ItemValueTypeIndicator, value: Primitive): boolean {
  switch (type) {
    case 'Numeric':
      return NumericValue.check(value)
    case 'Integer':
      return IntegerValue.check(value)
    case 'OnOff':
      return OnOffValue.check(value)
    case 'OpenClosed':
      return OpenClosedValue.check(value)
  }
}
