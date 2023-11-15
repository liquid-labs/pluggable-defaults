import fsPath from 'node:path'

import { configDir } from './config-dir'

export const PLUGABLE_CLI_SETTINGS_PATH = () => process.env.PLUGABLE_CLI_SETTINGS_PATH
  || fsPath.join(configDir, 'plugable', 'cli-settings.yaml')

export const PLUGABLE_PLAYGROUND = () => process.env.PLUGABLE_PLAYGROUND
  || process.env.LIQ_PLAYGROUND
  || fsPath.join(process.env.HOME, 'playground')

export const PLUGABLE_REGISTRY = () => process.env.PLUGABLE_REGISTRY
  || 'https://raw.githubusercontent.com/liquid-labs/plugable-registry/main/registry.yaml'
