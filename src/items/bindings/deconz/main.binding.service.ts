import { ItemChangedToCoordinator } from 'src/items/core-types'
import { LogFacade } from 'src/logging/log-facade'
import { ConfigService } from '@nestjs/config'

export class DeconzBinding {
  private _updateToCoordinator: ItemChangedToCoordinator
  private _log: LogFacade

  constructor(
    readonly config: ConfigService,
    readonly logger: LogFacade,
    readonly updateToCoordinator: ItemChangedToCoordinator,
    readonly configLabel: string,
  ) {
    this._log = logger.child('deconz binding')
    this._updateToCoordinator = updateToCoordinator
  }

  public setup = async () => {
    //
  }
}
