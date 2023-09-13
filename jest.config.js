  module.exports = {
    "transform": {
      "^.+\\.(ts|tsx|js|jsx|mjs)$": [
        "ts-jest"
      ]
    },
    resolver: '<rootDir>/myResolver.ts',
    //transformIgnorePatterns: ['/node_modules/(?!(@ag-grid-community|@ag-grid-community/core|@ag-grid-community/client-side-row-model)/)']
  }