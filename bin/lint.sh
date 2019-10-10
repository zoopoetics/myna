#!/bin/bash

echo 'Running ESLint...'

./node_modules/.bin/eslint .\
  --color --ext .js,.jsx,.mjs,.ts,.tsx \
  --config ./node_modules/@10x/myna/config/eslintrc.js \
  --ignore-path ./node_modules/@10x/myna/config/eslintignore \
  $@

exit $?