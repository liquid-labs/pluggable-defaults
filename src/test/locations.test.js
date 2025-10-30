/* global describe expect test */
import * as fsPath from 'node:path'

import { configDir } from '../config-dir'
import * as locations from '../locations'

describe('PLUGGABLE_CLI_SETTINGS_PATH', () => {
  test("defaults to '<config-dir>/pluggable/cli-settings.yaml'", () =>
    expect(locations.PLUGGABLE_CLI_SETTINGS_PATH()).toBe(fsPath.join(configDir, 'pluggable', 'cli-settings.yaml')))

  test('can be overriden by setting environment var PLUGGABLE_CLI_SETTINGS_PATH', () => {
    const newCLISettingsPath = fsPath.sep + 'foo'
    process.env.PLUGGABLE_CLI_SETTINGS_PATH = newCLISettingsPath
    try {
      expect(locations.PLUGGABLE_CLI_SETTINGS_PATH()).toBe(newCLISettingsPath)
    }
    finally {
      delete process.env.PLUGGABLE_CLI_SETTINGS_PATH
    }
  })
})

describe('PLUGGABLE_PLAYGROUND', () => {
  test("defaults to '${HOME}/playground' in users home dir", () => // eslint-disable-line no-template-curly-in-string
    expect(locations.PLUGGABLE_PLAYGROUND()).toBe(fsPath.join(process.env.HOME, 'playground')))

  test.each(['LIQ_PLAYGROUND', 'PLUGGABLE_PLAYGROUND'])('can be overridden by setting environment var %s', (envVar) => {
    const newPlayground = fsPath.sep + 'foo'
    process.env[envVar] = newPlayground
    try {
      expect(locations.PLUGGABLE_PLAYGROUND()).toBe(newPlayground)
    }
    finally {
      delete process.env[envVar]
    }
  })
})
