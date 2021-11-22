const { defaults } = require("jest-config");

const ignorePatterns = [];

module.exports = {
  collectCoverageFrom: ["src/**/*.ts"],
  moduleDirectories: ["src", ...defaults.moduleDirectories],
  moduleNameMapper: {
    "^@socialgouv/env-slug(.*)$": "<rootDir>/src$1",
  },
  testEnvironment: "node",
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    ...ignorePatterns,
  ],
  watchPathIgnorePatterns: ignorePatterns,
};
