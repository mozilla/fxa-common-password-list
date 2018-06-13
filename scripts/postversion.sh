#!/bin/bash

BRANCH_NAME="release-${npm_package_version}"
TAG_NAME="v${npm_package_version}"

git push origin ${BRANCH_NAME} &&
  git push origin refs/tags/${TAG_NAME} --no-verify

