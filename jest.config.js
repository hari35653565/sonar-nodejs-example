module.exports = {
  moduleFileExtensions: ["js", "ts"],
  reporters: ['default',  ['jest-sonar', {
            outputDirectory: '/var/lib/jenkins/workspace/test-jest',
            outputName: 'test-jest.xml',
            reportedFilePath: 'absolute'
        }]],
};
