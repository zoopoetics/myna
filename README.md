# Myna

> Easy linting, prettification, testing, and type checking for Web apps.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Overview](#overview)
- [Usage](#usage)
- [Developing](#developing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

This package gets you generic configurations for ESLint, Prettier, Jest, and Typescript. It is intended not to impose uniformity, but to get essential tooling up and running quickly in projects that don't have it yet.

It is named for the myna bird, which gets everywhere.

Myna strongly prefers minimal configuration and sensible defaults. Have a look in `config/` to see how tools are set up.

## Usage

Either

```bash
yarn install @zoopoetics/myna
```

Or

```bash
npm install @zoopoetics/myna
```

During installation:

- If there is no `babel.config.js` at the root of your project, Myna will add one so that Jest can be run project-wide.
- If there is no `tsconfig.json` at the root of your project, Myna will add one.
- If there is no "prettier" key in your root `package.json`, Myna will add one.
- If any of the following scripts is not found in your root `package.json`, Myna will add it.
  - `ci`: run all the following commands
  - `lint`: run ESLint
  - `prettify`: run Prettier
  - `test`: run Jest
  - `typecheck`: run Typescript

It is recommended to also:

```bash
yarn install husky lint-staged
```

And add the following to your root `package.json`:

```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "pre-push": "yarn ci"
  }
},
"lint-staged": {
  "*.{css,js,jsx,json,md,mdx,ts,tsx}": [
    "myna prettify",
    "git add ."
  ],
  "*.{js,jsx,ts,tsx}": [
    "myna lint --fix",
    "git add ."
  ]
},
```

Tweak this however you like, but it's good to have prophylactic tools running during interactions with git.
