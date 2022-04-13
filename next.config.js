const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

module.exports = {
  publicRuntimeConfig: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  trailingSlash: false,
  reactStrictMode: true,
}
