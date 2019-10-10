#!/bin/bash

echo 'Running Typescript...'
yarn tsc -p . $@
exit $?
