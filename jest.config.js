module.exports = {
  globals: {
    "ts-jest": {
      skipBabel: true,
    },
  },
  mapCoverage: true,
  moduleFileExtensions: ["js", "ts"],
  testResultsProcessor: "jest-sonar",
  reporters: ['default',  ['jest-sonar', {
            outputDirectory: '/var/lib/jenkins/workspace/test-jest',
            outputName: 'test-jest.xml',
            reportedFilePath: 'absolute'
        }]],
  transform: {
    "^.+\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
};
