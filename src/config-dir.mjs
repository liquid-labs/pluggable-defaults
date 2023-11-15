import * as fsPath from 'node:path'

export const configDir = process.env.XDG_CONFIG_HOME || fsPath.join(process.env.HOME, '.config')