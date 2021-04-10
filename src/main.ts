import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  console.log(`=-=-=-= NODE_ENV:${process.env.NODE_ENV} =-=-=-=`)
  console.log(`LOG_FILE_PREFIX = ${process.env.LOG_FILE_PREFIX ?? 'not set'}`)
  console.log(`MAIN_CONFIG_FOLDER = ${process.env.MAIN_CONFIG_FOLDER ?? 'not set'}`)
  console.log(`MAIN_CONFIG_FILE = ${process.env.MAIN_CONFIG_FILE ?? 'not set'}`)
  console.log(`LOG_FILE_PREFIX = ${process.env.LOG_FILE_PREFIX ?? 'not set'}`)
  console.log(`BITBUCKET_COMMIT = ${process.env.BITBUCKET_COMMIT ?? 'not set'}`)
  console.log(`BITBUCKET_TAG = ${process.env.BITBUCKET_TAG ?? 'not set'}`)
  console.log(`PORT = ${process.env.PORT}`)
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
