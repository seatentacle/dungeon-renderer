module.exports = {
  setupFiles: [
    './setupTests.js',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  testEnvironment: 'node',
};
