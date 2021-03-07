import { BinaryValue } from './binary-value.model'

export type OnOffValueType = 'off' | 'on'

export class OnOffValue extends BinaryValue<'off', 'on'> {
  constructor() {
    super('OnOff', 'off', 'on')
  }
}
