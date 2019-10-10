#!/bin/bash

echo 'Running Prettier...'

./node_modules/.bin/prettier \
  "**/*.{css,js,jsx,json,md,mdx,ts,tsx}" \
  --config ./node_modules/@zoopoetics/myna/config/prettier.config.js \
  --ignore-path ./node_modules/@zoopoetics/myna/config/prettierignore \
  --loglevel warn \
  --write \
  $@

exit $?