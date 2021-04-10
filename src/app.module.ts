import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Coordinator } from './items/coordinator.service'
import config from './items/config'
import { DeconzBinding } from './items/bindings/deconz/main.binding.service'
import { LogFacade } from './logging/log-facade'
import { ConsoleLogService } from './logging/console-log.service'

@Module({
  // imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [{ provide: LogFacade, useClass: ConsoleLogService }, AppService],
})
export class AppModule {}
