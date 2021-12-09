module.exports = {
  testEnvironment: "jsdom",
    roots: ['<rootDir>'],
    transform: {
      '\\.(js|jsx)?$': 'babel-jest',
    },
    testMatch: [
      '<rootDir>/app/**/*.test.{js, jsx}',
      '<rootDir>/test/**/*.test.js',
      '<rootDir>/src/Tests/**/*.test.js',

    ],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
      'react-spring/renderprops': '<rootDir>/node_modules/react-spring/renderprops.cjs',
      'react-spring': '<rootDir>/node_modules/react-spring/web.cjs',
    },
  }