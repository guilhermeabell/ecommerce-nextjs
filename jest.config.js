module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/app/**', '!src/lib/registry.tsx', '!src/styles/**', '!src/types/**', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }] },
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
