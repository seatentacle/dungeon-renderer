module.exports = {
  setupFiles: [
    './setupTests.js',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    "^animations/(.*)$": "<rootDir>/src/animations/$1",
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^lib/(.*)$": "<rootDir>/src/lib/$1",
  },
  collectCoverageFrom: [
    "src/**/*.ts*"
  ],
  testEnvironment: 'node',
};
