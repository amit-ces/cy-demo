/* eslint-disable @typescript-eslint/no-var-requires */
// cypress/plugins/index.js
import cypressEslint = require('cypress-eslint-preprocessor')
const cucumber = require('@bahmutov/cypress-esbuild-preprocessor')

module.exports = (on: any, config) => {
  on('file:preprocessor', cypressEslint())
  on('file:preprocessor', cucumber())
}
