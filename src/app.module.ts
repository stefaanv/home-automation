import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Coordinator } from './items/coordinator.service'
import config from './items/config'
import { DeconzBinding } from './items/bindings/deconz/main.binding.service'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  controllers: [AppController],
  providers: [AppService, Coordinator, ConfigService, DeconzBinding],
})
export class AppModule {}
