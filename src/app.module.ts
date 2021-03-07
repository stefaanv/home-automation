import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemStatusService } from './items/item-status.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ItemStatusService],
})
export class AppModule {}
