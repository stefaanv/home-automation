// must be set in `dockerfile` or in `docker-compose.yaml`
export const APPLICATION_NAME = process.env.LOG_FILE_PREFIX ?? 'application name'
export const LOG_FILE_PREFIX = process.env.LOG_FILE_PREFIX ?? 'LOG_'
export const LOG_FOLDER = process.env.LOG_FOLDER ?? './logs'
export const CONFIG_FOLDER = process.env.CONFIG_FOLDER ?? './config'
export const MAIN_CONFIG_FILE = process.env.CONFIG_MAIN_CONFIG_FILE ?? 'config.js'

export const DECONZ_CONFKEY = 'deconz'
export const CONSOLE_LOG_MAX_CONTEXT_LENGTH = 15
export const CONSOLE_LOG_PREFIX_LENGTH = 93
export const WINSTON_CONSOLE_LOG_PREFIX_LENGTH = 47
export const CONSOLE_LOG_TIME_FORMAT = 'HH:mm:ss:sss'
export const MAIN_LOG_CONTEXT = 'MAIN_LOG_CONTEXT'
