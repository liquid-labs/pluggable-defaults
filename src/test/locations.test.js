/* global describe expect test */
import * as fsPath from 'node:path'

import * as locations from '../locations'

describe('PLUGABLE_HOME', () => {
  test("defaults to '.liq' in users home dir", () =>
    expect(locations.PLUGABLE_HOME()).toBe(fsPath.join(process.env.HOME, '.config', 'plugable')))

  test.each(['LIQ_HOME', 'PLUGABLE_HOME'])('can be overridden by setting environment var %s', (envVar) => {
    const newHome = fsPath.sep + 'foo'
    process.env[envVar] = newHome
    try {
      expect(locations.PLUGABLE_HOME()).toBe(newHome)
    }
    finally {
      delete process.env[envVar]
    }
  })
})

describe('PLUGABLE_PLAYGROUND', () => {
  test("defaults to '<PLUGABLE_HOME>/playground' in users home dir", () =>
    expect(locations.PLUGABLE_PLAYGROUND()).toBe(fsPath.join(process.env.HOME, 'playground')))

  test.each(['LIQ_PLAYGROUND', 'PLUGABLE_PLAYGROUND'])('can be overridden by setting environment var %s', (envVar) => {
    const newPlayground = fsPath.sep + 'foo'
    process.env[envVar] = newPlayground
    try {
      expect(locations.PLUGABLE_PLAYGROUND()).toBe(newPlayground)
    }
    finally {
      delete process.env[envVar]
    }
  })
})

describe('PLUGABLE_WORKING_DIR', () => {
  test("defaults to '<PLUGABLE_HOME>/tmp' in users home dir", () =>
    expect(locations.PLUGABLE_WORKING_DIR()).toBe(fsPath.join(locations.PLUGABLE_HOME(), 'tmp')))

  test.each(['LIQ_WORKING_DIR', 'PLUGABLE_WORKING_DIR'])
      ('can be overridden by setting environment var %s', (envVar) => {
    const newWorkingDir = fsPath.sep + 'foo'
    process.env[envVar] = newWorkingDir
    try {
      expect(locations.PLUGABLE_WORKING_DIR()).toBe(newWorkingDir)
    }
    finally {
      delete process.env[envVar]
    }
  })
})
