import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemService } from './items/item.service'
import config from './config/config'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  controllers: [AppController],
  providers: [AppService, ItemService, ConfigService],
})
export class AppModule {}
