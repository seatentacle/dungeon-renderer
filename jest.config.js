module.exports = {
  setupFiles: [
    './setupTests.js',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  collectCoverageFrom: [
    "src/**/*.ts*"
  ],
  testEnvironment: 'node',
};
