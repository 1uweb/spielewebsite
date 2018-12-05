const isProd = process.env.NODE_ENV === 'production'
const withSass = require('@zeit/next-sass')

module.exports = withSass(), {
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'cdn.uwe-barthel.net' : ''
}