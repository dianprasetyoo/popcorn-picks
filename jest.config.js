module.exports = {
  rootDir: ".",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx}",
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
};
