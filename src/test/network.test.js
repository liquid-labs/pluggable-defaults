/* global describe expect test */
import * as network from '../network'

describe('LIQ_PORT', () => {
  test('defaults to 32600', () => expect(network.LIQ_PORT()).toBe(32600))

  test('can be overridden by setting environment var LIQ_PORT', () => {
    const newPort = 32651
    process.env.LIQ_PORT = newPort
    try {
      expect(network.LIQ_PORT()).toBe(newPort + '')
    }
    finally {
      delete process.env.LIQ_PORT
    }
  })
})
