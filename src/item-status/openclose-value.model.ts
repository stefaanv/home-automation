import { IItemValue } from './item-value.interface'

export class OpenCloseValue implements IItemValue {
  type: 'openclosed' = 'openclosed'
  value: 'open' | 'closed'

  constructor(value: 'open' | 'closed') {
    this.value = value
  }

  isMyType(value: IItemValue) {
    return value.type === 'openclosed'
  }

  update(newValue: string | number) {
    if (typeof newValue == 'number') {
      if (newValue == 0) this.value = 'closed'
      else this.value = 'open'
      return true
    }
    switch (newValue) {
      case 'open':
      case 'OPEN':
      case 'Open': {
        this.value = 'open'
        return true
      }
      case 'closed':
      case 'CLOSED':
      case 'Closed': {
        this.value = 'closed'
        return true
      }
      default:
        return false
    }
  }

  public toString() {
    return this.value
  }
}
