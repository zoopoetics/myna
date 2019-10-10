#!/bin/bash

echo 'Running Jest...'

./node_modules/.bin/jest \
  --config ./node_modules/@10x/myna/config/jest/jest.config.js \
  $@

exit $?
