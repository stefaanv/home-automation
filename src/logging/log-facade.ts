import { differenceInMilliseconds, differenceInSeconds } from 'date-fns'

export type LogSeverity = 'debug' | 'info' | 'warn' | 'error' | 'urgent'
type LogParams = [message: string, uid?: string, meta?: any]

export abstract class LogFacade {
  private _chronoStart = new Date()

  abstract child(context: string): LogFacade

  abstract log(severity: LogSeverity, message: string, uid?: string, meta?: any): void

  debug = (...args: LogParams) => this.log('debug', ...args)
  warn = (...args: LogParams) => this.log('warn', ...args)
  info = (...args: LogParams) => this.log('info', ...args)
  error = (...args: LogParams) => this.log('error', ...args)
  urgent = (...args: LogParams) => this.log('urgent', ...args)

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
