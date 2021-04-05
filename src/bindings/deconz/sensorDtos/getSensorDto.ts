export interface GetSensorConfigDto {
  on: boolean
  reachable: boolean
  battery: number
  offset: number
}

export interface GetSensorStateDto {
  lastupdated: Date
  humidity?: number
  temperature?: number
}

export interface GetSensorDto {
  config: GetSensorConfigDto
  ep: number
  etag: string
  lastSeen: Date
  manufacturername: string
  modelid: string
  name: string
  state: any
  swversion: string
  type: string
  uniqueid: string
}
