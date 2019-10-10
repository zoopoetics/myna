module.exports = {
  // Grab complete coverage report from all code, but ignore types
  collectCoverageFrom: ["packages/**/*.{js,jsx,ts,tsx}", "!packages/**/*.d.ts"],

  // Prevent static file imports from exploding
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "@10x/myna/config/jest/file-mock.js",
  },

  // Ignore the Yarn cache in order to dodge Haste errors
  modulePathIgnorePatterns: [".cache", "packages/codegen"],

  // Jest will take rootDir to be the location of this config file.
  // Specifying roots tells it locations where test files actually live.
  roots: [process.cwd()],

  // Grab env vars to prevent explosions.
  setupFiles: ["dotenv/config"],

  // Transforms that prevent CSS, SVG, and other imports from exploding
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.css$": "@10x/myna/config/jest/css-transform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "@10x/myna/config/jest/file-transform.js",
  },

  // Provides autocomplete for file and test name patterns in watch mode
  watchPlugins: [
    "jest-watch-typeahead/filename.js",
    "jest-watch-typeahead/testname.js",
  ],
};
