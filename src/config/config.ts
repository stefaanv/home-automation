import { readFileSync } from 'fs'
import { join } from 'path'
import { CONFIG_FOLDER, MAIN_CONFIG_FILE } from '../constants'

export default async () => {
  const myModule = await import(join(__dirname, CONFIG_FOLDER, MAIN_CONFIG_FILE))
  return myModule.default()
  // return JSON.parse(readFileSync(join(__dirname, CONFIG_FOLDER, MAIN_CONFIG_FILE), 'utf8')) as Record<string, any>
  // return { main: 'test' } as Record<string, any>
}
