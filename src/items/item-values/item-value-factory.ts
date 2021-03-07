import { ItemValue } from './item-value.interface'
import { ItemValueTypeIndicator } from './item-value-type-indicators'
import { NumericValue } from './numeric-value.model'
import { OnOffValue } from './onoff-value.model'
import { OpenClosedValue } from './openclose-value.model'

export const itemValueFactory = (type: ItemValueTypeIndicator, precision?: number, unit?: string): ItemValue => {
  switch (type) {
    case 'Numeric':
      return new NumericValue(precision, unit)
    case 'OnOff':
      return new OnOffValue()
    case 'OpenClosed':
      return new OpenClosedValue()
  }
}
