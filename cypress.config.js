// configuration property
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cybertekschool.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
