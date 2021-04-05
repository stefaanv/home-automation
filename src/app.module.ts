import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemStatusService } from './items/item-status.service'
import config from './config/config'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  controllers: [AppController],
  providers: [AppService, ItemStatusService],
})
export class AppModule {}
