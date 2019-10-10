#!/bin/bash

echo 'Running all CI checks...'

checkStatus () {
  if [ $1 -gt 0 ]
  then
    exit 1
  fi
}

./node_modules/.bin/myna lint
checkStatus $?

./node_modules/.bin/myna test --ci --bail
checkStatus $?

./node_modules/.bin/myna typecheck
checkStatus $?

