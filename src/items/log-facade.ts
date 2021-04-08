export interface LogFacade {
  child(context: string): LogFacade

  debug(message: string, uid: string, meta?: any): void
  warn(message: string, uid: string, meta?: any): void
  info(message: string, uid: string, meta?: any): void
  error(message: string, uid: string, meta?: any): void
}
