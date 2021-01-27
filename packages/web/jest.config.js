const { name } = require("./package.json");

module.exports = {
  displayName: name,
  name,
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  silent: true,
  clearMocks: true,
  transform: {},
};
