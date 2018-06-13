#!/bin/bash

BRANCH_NAME="release-${npm_package_version}"

git checkout master &&
  git pull &&
  git checkout -b ${BRANCH_NAME} &&
  conventional-changelog -p angular -i CHANGELOG.md -s -r 0 &&
  git add CHANGELOG.md

