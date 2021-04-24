import { readFileSync } from 'fs'
import { join } from 'path'
import { CONFIG_FOLDER, MAIN_CONFIG_FILE } from './constants'

interface ChildConfig {
  file: string
  label: string
  active: boolean
}
interface MainConfig {
  children: ChildConfig[]
  main: {
    apiPort: number
  }
}

export default async () => {
  const mainConfigModule = await import(join(__dirname, CONFIG_FOLDER, MAIN_CONFIG_FILE))
  const mainConfig: MainConfig = mainConfigModule.default()
  const children: ChildConfig[] = mainConfig.children
  const config: any = { main: mainConfig.main, bindings: children }

  for await (let child of children.filter((c) => c.active)) {
    const childConfig = await import(join(__dirname, CONFIG_FOLDER, child.file))
    config[child.label] = childConfig.default()
  }
  return mainConfigModule.default()
}
