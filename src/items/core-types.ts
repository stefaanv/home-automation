import { Item } from './item'

export type Primitive = string | number | boolean | undefined
export type PrimitiveOrUndefined = Primitive | undefined
export type UpdateType = 'event' | 'update'
export type ItemChangedToBinding = (item: Item) => void
export type ItemChangedToCoordinator = (topic: string, newValue: Primitive) => void
