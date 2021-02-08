const { name } = require("./package.json");

module.exports = {
  // name
  displayName: name,
  name,
  // options
  verbose: true,
  // test config
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    ".(css|less|sass|scss)": "identity-obj-proxy",
  },
};
