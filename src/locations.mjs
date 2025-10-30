import fsPath from 'node:path'

import { configDir } from './config-dir'

export const PLUGGABLE_CLI_SETTINGS_PATH = () => process.env.PLUGGABLE_CLI_SETTINGS_PATH
  || fsPath.join(configDir, 'pluggable', 'cli-settings.yaml')

export const PLUGGABLE_PLAYGROUND = () => process.env.PLUGGABLE_PLAYGROUND
  || process.env.LIQ_PLAYGROUND
  || fsPath.join(process.env.HOME, 'playground')
