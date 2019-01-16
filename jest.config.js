module.exports = {
  resetMocks: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/src/components$1',
  },
};
