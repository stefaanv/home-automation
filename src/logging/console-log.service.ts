import { Injectable } from '@nestjs/common'
import { LogFacade, LogSeverity } from './log-facade'
import * as fns from 'date-fns'
import * as colors from 'colors'
import { CONSOLE_LOG_MAX_CONTEXT_LENGTH, CONSOLE_LOG_PREFIX_LENGTH, CONSOLE_LOG_TIME_FORMAT } from '../constants'

@Injectable()
export class ConsoleLog extends LogFacade {
  private _context: string
  set context(value: string) {
    this._context = value
  }

  constructor() {
    super()
    this._context = 'main'
  }

  child(context: string): LogFacade {
    const child = new ConsoleLog()
    child._context = context.substr(0, CONSOLE_LOG_MAX_CONTEXT_LENGTH)
    return child
  }

  severityToString(severity: LogSeverity) {
    switch (severity) {
      case 'debug':
        return 'DEBUG '
      case 'info':
        return 'INFO  '
      case 'warn':
        return 'WARN  '
      case 'error':
        return 'ERROR '
      case 'urgent':
        return 'URGENT'
    }
  }

  severityToColor(severity: LogSeverity) {
    switch (severity) {
      case 'debug':
        return colors.blue
      case 'info':
        return colors.white
      case 'warn':
        return colors.magenta
      case 'error':
        return colors.red
      case 'urgent':
        return colors.bgRed
    }
  }

  log(severity: LogSeverity, message: string, uid?: string) {
    const time = colors.grey(fns.format(new Date(), CONSOLE_LOG_TIME_FORMAT))
    const _uid = uid ? colors.green(uid.substr(0, 5)) : undefined
    const context = colors.yellow(this._context)
    let sevColor = this.severityToColor(severity)
    const _sev = sevColor(this.severityToString(severity))
    const prefix = `${_sev} ${time}${_uid ? '' : `${_uid ? ' - ' + _uid : ''}`} ${'[' + colors.yellow(context) + ']'}`
    console.log(`${prefix.substr(0, CONSOLE_LOG_PREFIX_LENGTH).padEnd(CONSOLE_LOG_PREFIX_LENGTH)} => ${sevColor(message)}`)
  }
}
