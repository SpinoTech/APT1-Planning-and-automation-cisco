const { defineConfig } = require('cypress')
  module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: { 
    baseUrl: 'https://www.hsbc.co.in/',
    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],  // those are for excluded files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // it can only take the {js,jsx,ts,tsx} files
    setupNodeEvents(on,config){
    }
  },
})
