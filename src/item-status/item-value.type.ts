export type OpenClosedValue = 'open' | 'closed'
export type OnOffValue = 'on' | 'off'

export type ItemValueType = OpenClosedValue | OnOffValue

export abstract class ItemValue {
  itemType: string
  value: string | number
  public abstract isMyType(value: string | number): boolean
}

export class OpenClosed extends ItemValue {
  itemType: 'OpenClosed' = 'OpenClosed'
  value: OpenClosedValue
  public isMyType(value: OpenClosedValue): boolean {
    return value == 'open' || value == 'closed'
  }
}

export class OnOff extends ItemValue {
  itemType: 'OnOff' = 'OnOff'
  value: OnOffValue
  public isMyType(value: OnOffValue): boolean {
    return value == 'on' || value == 'off'
  }
}
