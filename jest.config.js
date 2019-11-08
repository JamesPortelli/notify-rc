'use strict';

const argv = process.argv.slice(2);
const shouldWatch = argv.includes('--watch');

module.exports = {
  clearMocks: true,
  restoreMocks: true,
  collectCoverage: !shouldWatch,
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: {
        esModuleInterop: true
      },
      isolatedModules: true
    }
  },
  rootDir: 'src',
  testMatch: ['**/__tests__/*.test.(ts|tsx)'],
  moduleDirectories: ['src', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/../test/setupTests.js']
};
