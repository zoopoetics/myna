#!/bin/bash

command=$1
args="${@:2}"

if [ "$command" = "ci" ]
then
  ./node_modules/@10x/myna/bin/ci.sh ${@:2}
  exit $?
fi

if [ "$command" = "lint" ]
then
  ./node_modules/@10x/myna/bin/lint.sh ${@:2}
  exit $?
fi

if [ "$command" = "prettify" ]
then
  ./node_modules/@10x/myna/bin/prettify.sh ${@:2}
  exit $?
fi

if [ "$command" = "test" ]
then
  ./node_modules/@10x/myna/bin/test.sh ${@:2}
  exit $?
fi

if [ "$command" = "typecheck" ]
then
  ./node_modules/@10x/myna/bin/typecheck.sh ${@:2}
  exit $?
fi

