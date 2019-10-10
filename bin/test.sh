#!/bin/bash

echo 'Running Jest...'

./node_modules/.bin/jest \
  --config ./node_modules/@zoopoetics/myna/config/jest/jest.config.js \
  $@

exit $?
