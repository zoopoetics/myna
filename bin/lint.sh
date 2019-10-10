#!/bin/bash

echo 'Running ESLint...'

./node_modules/.bin/eslint .\
  --color --ext .js,.jsx,.mjs,.ts,.tsx \
  --config ./node_modules/@zoopoetics/myna/config/eslintrc.js \
  --ignore-path ./node_modules/@zoopoetics/myna/config/eslintignore \
  $@

exit $?