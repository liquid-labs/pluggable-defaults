import fsPath from 'node:path'

const configDir = process.env.XDG_CONFIG_HOME || fsPath.join(process.env.HOME, '.config')

export const PLUGABLE_HOME = () => process.env.PLUGABLE_HOME 
  || process.env.LIQ_HOME
  || fsPath.join(configDir, 'plugable')

export const PLUGABLE_PLAYGROUND = () => process.env.PLUGABLE_PLAYGROUND 
  || process.env.LIQ_PLAYGROUND
  || fsPath.join(process.env.HOME, 'playground')

export const PLUGABLE_WORKING_DIR = () => process.env.PLUGABLE_WORKING_DIR
  || process.env.LIQ_WORKING_DIR
  || fsPath.join(PLUGABLE_HOME(), 'tmp')

export const PLUGABLE_API_SPEC = () => fsPath.join(PLUGABLE_HOME(), 'api.json')

export const PLUGABLE_SERVER_DB = () => fsPath.join(PLUGABLE_HOME(), 'server')

export const PLUGABLE_SERVER_PID_FILE = () => fsPath.join(PLUGABLE_SERVER_DB(), 'liq-server.pid')

export const PLUGABLE_PLUGINS_DIR = () => process.env.PLUGABLE_PLUGIN_DIR
  || process.env.LIQ_PLUGIN_PATH
  || fsPath.join(PLUGABLE_SERVER_DB(), 'plugins')
