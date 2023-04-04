const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "Islamic Foundation",
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    baseUrl:"http://3.109.139.226:3006",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //html report generation
    },
  },
});
