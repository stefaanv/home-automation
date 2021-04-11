import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Coordinator } from './items/coordinator.service'
import config from './config'
import { DeconzBinding } from './items/bindings/deconz/main.binding.service'
import { LogFacade } from './logging/log-facade'
import { ConsoleLogService } from './logging/console-log.service'
import { WinstonLogService } from './logging/winston.service'
import { MAIN_LOG_CONTEXT } from './constants'

@Module({
  // imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    { provide: LogFacade, useClass: WinstonLogService },
    { provide: MAIN_LOG_CONTEXT, useValue: 'main' },
    AppService,
  ],
})
export class AppModule {}
