module.exports = {
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",

    // Prettier must come last
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],

  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: "@typescript-eslint/parser",

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },

  // https://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: [
    "@typescript-eslint",
    "filenames",
    "jest",
    "jsx-a11y",
    "promise",
    "react",
    "react-hooks",
  ],

  rules: {
    // Very outdated rule, no longer needed.
    "react/display-name": 0,

    // Typescript checks props
    "react/prop-types": 0,

    // ESLint's no-unused-vars rule will wig out on types.
    // Disable it and use the @typescript-eslint one instead.
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": "error",

    // jsx-a11y will complain about Next.js <Link /> components.
    // This prevents that from happening.
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
      },
    ],
  },

  // https://eslint.org/docs/user-guide/configuring#adding-shared-settings
  settings: {
    react: {
      version: "detect",
    },
  },
};
