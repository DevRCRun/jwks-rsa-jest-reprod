const jwksClient = require('jwks-rsa').JwksClient

test('Jest loads jwks-rsa JwksClient', () => {
  expect(jwksClient).toEqual(expect.any(Function))
})