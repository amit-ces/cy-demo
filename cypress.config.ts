import { defineConfig } from 'cypress'
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

export default defineConfig({
  e2e: {
    baseUrl:
      'https://opensource-demo.orangehrmlive.com',
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
      on('file:preprocessor', bundler)

      await addCucumberPreprocessorPlugin(
        on,
        config
      )

      const options = {
        typescript: require.resolve('typescript')
      }

      return config
    },
    specPattern:
      'cypress/e2e/features/**/*.feature'
  }
})
