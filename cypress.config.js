const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
let registro;
module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  includeShadowDom: true,
  //configuração do allure-results
  env: {
    allureResultsPath: 'test-report/allure-results',
    allureAttachRequests: true,
    allureAddAnalyticLabels: true,
  },
  e2e: {
    experimentalRunAllSpecs: true,
    baseUrl: "https://sif-frontend-ru-sif.qa.ocp.pbh.gov.br/", //qa
    //baseUrl: "https://sif-hm.pbh.gov.br", //hml
    setupNodeEvents(on, config) {
      on('task', {
        setRegistro(reg) {
          registro = reg.trim();
          return registro
        },
        getRegistro() {
          return registro
        }
      })
      allureWriter(on, config);
      return config;
    }
  },
});