import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AppService } from './app.service'
import { LogFacade } from './logging/log-facade'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly configService: ConfigService,
    private readonly log: LogFacade,
  ) {
    this.log = log.child('AppController')

    this.log.debug('DEBUG log message', '12345')
    this.log.info('INFO log message')
    this.log.warn('WARN log message', 'a9d8f')
    this.log.error('ERROR log message')
    this.log.urgent('URGENT log message')
  }

  @Get()
  getHello(): string {
    // console.log(this.configService.get<number>('main.port'))
    this.log.info('getHello called', 'da996')
    return this.appService.getHello()
  }
}
