#!/usr/bin/env sh

# Abort the script when an error occurs
set -e

# Build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy to github pages'


# deploy to https://github.com/WX-DongXing/vue-animation-timeline
git push -f git@github.com:WX-DongXing/vue-animation-timeline.git master:gh-pages

cd -
