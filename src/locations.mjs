import fsPath from 'node:path'

const configDir = process.env.XDG_CONFIG_HOME || fsPath.join(process.env.HOME, '.config')

export const PLUGABLE_PLAYGROUND = () => process.env.PLUGABLE_PLAYGROUND
  || process.env.LIQ_PLAYGROUND
  || fsPath.join(process.env.HOME, 'playground')

export const PLUGABLE_REGISTRY = () => process.env.PLUGABLE_REGISTRY
  || 'https://raw.githubusercontent.com/liquid-labs/plugable-registry/main/registry.yaml'
