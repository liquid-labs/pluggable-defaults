/* global describe expect test */
import * as fsPath from 'node:path'

import * as locations from '../locations'

describe('PLUGABLE_PLAYGROUND', () => {
  test("defaults to '${HOME}/playground' in users home dir", () =>
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

describe('PLUGABLE_REGISTRY', () => {
  test("defaults to '<PLUGABLE_HOME>/playground' in users home dir", () =>
    expect(locations.PLUGABLE_REGISTRY())
      .toBe('https://raw.githubusercontent.com/liquid-labs/plugable-registry/main/registry.yaml'))

  test('can be overridden by setting environment var PLUGABLE_REGISTRY', () => {
    const registry = 'https://foo.com/registry'
    process.env.PLUGABLE_REGISTRY = registry
    try {
      expect(locations.PLUGABLE_REGISTRY()).toBe(registry)
    }
    finally {
      delete process.env.PLUGABLE_REGISTRY
    }
  })
})