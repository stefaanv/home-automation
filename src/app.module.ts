import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Coordinator } from './items/coordinator.service'
import config from './items/config'
import { DeconzBinding } from './items/bindings/deconz/main.binding.service'
import { LogFacade } from './logging/log-facade'
import { ConsoleLog } from './logging/console-log.service'

@Module({
  // imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  controllers: [AppController],
  providers: [{ provide: LogFacade, useClass: ConsoleLog }, AppService],
})
export class AppModule {}
