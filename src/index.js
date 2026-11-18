const jwksRsa = require('jwks-rsa')

async function main() {
    const client = jwksRsa({ jwksUri: 'https://login.microsoftonline.com/common/discovery/v2.0/keys', timeout: 30000 })

    const signingKey = await client.getSigningKey('xH9DJH3N086Ags8JL6IQzeQh1p8')

    console.log(signingKey.publicKey)
}

main()

