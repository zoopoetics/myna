module.exports = {
  env: {
    development: {
      plugins: ["styled-jsx/babel"],
    },
    production: {
      plugins: ["styled-jsx/babel"],
    },
    test: {
      // Prevent styled-jsx spam in Jest snapshots
      plugins: ["styled-jsx/babel-test"],
    },
  },
  presets: [
    [
      "react-app",
      {
        typescript: true,
      },
    ],
  ],
};
