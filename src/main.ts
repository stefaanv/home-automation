import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Item } from './item-status/item'
import { NumericValue } from './item-status/item-value models/numeric-value.model'
import { OnOffValue } from './item-status/item-value models/onoff-value.model'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  const item1 = new Item<OnOffValue>(OnOffValue, 'test', 'on')
  const item2 = new Item<NumericValue>(NumericValue, 'test2', 10, 1, 'Lx')
}
bootstrap()
