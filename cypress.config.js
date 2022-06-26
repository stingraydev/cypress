const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://pomnim.motocitizen.info",
        defaultCommandTimeout: 7000,
        numTestsKeptInMemory: 0
    },
});
