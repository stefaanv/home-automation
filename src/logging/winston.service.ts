import { Inject, Injectable } from '@nestjs/common'
import { LogFacade, LogSeverity } from './log-facade'
import * as fns from 'date-fns'
import * as winston from 'winston'
import * as drf from 'winston-daily-rotate-file'
import { MAIN_LOG_CONTEXT } from '../constants'

@Injectable()
export class WinstonLogService extends LogFacade {
  static _logger: winston.Logger
  static readonly consoleTimeFormat = process.env.CONSOLE_LOG_TIME_FORMAT ?? 'HH:mm:ss.SSS'
  private _myLogger: winston.Logger

  constructor(@Inject(MAIN_LOG_CONTEXT) context?: string) {
    super()
    this._myLogger = WinstonLogService._logger.child({ context: context ?? 'main' })
  }

  static createWinstonLogger() {
    const timezone = process.env.LOG_TIMEZONE ?? 'Europe/Brussels'
    const fileLogFormat = !process.env.FILE_LOG_FORMAT_JSON ? winston.format.json() : winston.format.simple()
    const fileLogLevel = process.env.FILE_LOG_LEVEL ?? 'debug'
    const fileTimeFormat = process.env.FILE_LOG_TIME_FORMAT ?? 'D/M/YYYY HH:mm:ss.SSS'
    const defaultLogFolder = (process.env.NODE_ENV ?? 'dev').startsWith('dev') ? 'C:\\temp' : './dist'

    const formatForFile = winston.format.printf((info) => {
      const uid = info.uid ? `,"uid":"${info.uid}"` : ''
      const meta = info.meta ? `,"meta":${JSON.stringify(info.meta)}` : ''
      return `{"timestamp":"${info.timestamp}","level":"${info.level}","context":"${info.context}","message":"${info.message}"${uid}${meta}}`
    })

    const fileTransportOptions = {
      //Parameters are explained at https://github.com/winstonjs/winston-daily-rotate-file
      frequency: process.env.LOG_FREQUENCY ?? '24h',
      datePattern: process.env.LOG_DATEPATTERN ?? 'YYYY-MM-DD',
      filename: `${process.env.LOG_FILE_PREFIX ?? 'log'}-%DATE%.log`,
      dirname: process.env.LOG_FOLDER ?? defaultLogFolder,
      maxSize: process.env.LOG_FILE_MAX_SIZE ?? '50m',
      maxFiles: process.env.LOG_FILE_MAX_FILES ? parseInt(process.env.LOG_FILE_MAX_FILES) : 30,
      utc: false,
      level: fileLogLevel,
      format: winston.format.combine(
        winston.format.timestamp({ format: fileTimeFormat }),
        winston.format.json(),
        formatForFile,
      ),
    }
    console.log(fileTransportOptions)
    const fileTransport = new drf(fileTransportOptions)

    const formatForConsole = winston.format.printf((info) => {
      const uid = info.uid ? ` (UID ${info.uid})` : ''
      return `${info.timestamp} ${info.level} [${info.context}] ${info.message} ${uid}`
    })

    const consoleTransport = new winston.transports.Console({
      level: `${process.env.CONSOLE_LOG_LEVEL ?? 'debug'}`,
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: WinstonLogService.consoleTimeFormat }),
        formatForConsole,
      ),
    })

    WinstonLogService._logger = winston.createLogger({
      transports: [fileTransport, consoleTransport],
    })
  }

  child(context: string): LogFacade {
    return new WinstonLogService(context)
  }

  log(severity: LogSeverity, message: string, uid?: string, meta?: any): void {
    if (!this._myLogger) {
      console.error(`ERROR: log function of uninitialized logger called`)
    }
    this._myLogger.log(severity, message, { uid, meta })
  }
}

WinstonLogService.createWinstonLogger()
