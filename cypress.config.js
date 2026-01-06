// <===【單行註解】 【cypress.config.js】這個檔案是 Cypress 專案最核心的「設定檔」 

import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '8wjy6m',
  // cypress.config.js
env: {
  TOKEN: '5bac6898a158d21e3716a6e916f307bce0156'},
e2e: {
    baseUrl: 'https://in-u6.ttgroup-dev.vip',
    setupNodeEvents(on, config) {
      // node events（目前可空）
    },
  },
})


/* <===【首部註解】
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
  },
});



const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8wjy6m",

  e2e: {
    baseUrl: "https://example.cypress.io",

    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
});

*/  // **尾部註解