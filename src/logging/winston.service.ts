import { Injectable } from '@nestjs/common'
import { LogFacade, LogSeverity } from './log-facade'
import * as fns from 'date-fns'
import * as colors from 'colors'
import { CONSOLE_LOG_MAX_CONTEXT_LENGTH, CONSOLE_LOG_PREFIX_LENGTH, CONSOLE_LOG_TIME_FORMAT } from '../constants'
/*
@Injectable()
export class WinstonLogService extends LogFacade {}
*/
