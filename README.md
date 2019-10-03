# fxa-common-password-list

Check whether a password is common.

## Installation:
> npm install fxa-common-password-list

## Usage:
```js
const commonPassworList = require('fxa-common-password-list');

// returns true
commonPassworList.test('password');

// returns false
commonPasswordList.test('@!#^GDSAQ@#^Q#@^$YAESFDAS');
```

## Tagging a release

One command to do it all:

> npm version &lt;version&gt;

* Creates a release branch
* Updates version number in package.json, package-lock.json
* Updates CHANGELOG.md
* Commits changes
* Creates a tag
* Pushes release branch and tag to origin

## Generating password list
A new encoded password list can be created
> node scripts/generate-encoded-passwords-module.js ./source_data/10_million_password_list_top_1M.txt ./src/encoded-passwords.js 50000 8

## License:
MPL-2.0

