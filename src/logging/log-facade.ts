import { differenceInMilliseconds, differenceInSeconds } from 'date-fns'

export type LogSeverity = 'debug' | 'info' | 'warn' | 'error' | 'urgent'

export abstract class LogFacade {
  private _chronoStart: Date

  abstract child(context: string): LogFacade

  abstract log(severity: LogSeverity, message: string, uid?: string, meta?: any): void

  debug(message: string, uid?: string, meta?: any) {
    this.log('debug', message, uid, meta)
  }

  info(message: string, uid?: string, meta?: any) {
    this.log('info', message, uid, meta)
  }

  warn(message: string, uid?: string, meta?: any) {
    this.log('warn', message, uid, meta)
  }

  error(message: string, uid?: string, meta?: any) {
    this.log('error', message, uid, meta)
  }

  urgent(message: string, uid?: string, meta?: any) {
    this.log('urgent', message, uid, meta)
  }

  chronoStart() {
    this._chronoStart = new Date()
  }

  chronoMilliSec() {
    return differenceInMilliseconds(new Date(), this._chronoStart)
  }
  chronoSec() {
    return differenceInSeconds(new Date(), this._chronoStart)
  }
}
