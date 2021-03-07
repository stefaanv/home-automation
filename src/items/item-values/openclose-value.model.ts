import { BinaryValue } from './binary-value.model'

export type OpenClosedValueType = 'closed' | 'open'

export class OpenClosedValue extends BinaryValue<'closed', 'open'> {
  constructor() {
    super('OpenClosed', 'closed', 'open')
  }
}
