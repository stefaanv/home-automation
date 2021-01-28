import { IItemValue } from './item-value.interface'

export class OnOffValue implements IItemValue {
  type: 'onoff' = 'onoff'
  value: 'on' | 'off'

  constructor(value: 'on' | 'off') {
    this.value = value
  }

  isMyType(value: IItemValue) {
    return value.type === 'onoff'
  }

  update(newValue: string | number) {
    if (typeof newValue == 'number') {
      if (newValue == 0) this.value = 'off'
      else this.value = 'on'
      return true
    }
    switch (newValue) {
      case 'on':
      case 'ON':
      case 'On': {
        this.value = 'on'
        return true
      }
      case 'off':
      case 'OFF':
      case 'Off': {
        this.value = 'off'
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
