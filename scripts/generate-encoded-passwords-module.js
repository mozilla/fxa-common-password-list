/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const fs = require('fs');
const path = require('path');

const readPasswords = require('./lib/read-passwords');
const { Encoder } = require('incremental-encoder').default;

const inputFilename = process.argv[2];
const outputFilename = process.argv[3];
const numberOfPasswords = parseInt(process.argv[4]);
const minLength = parseInt(process.argv[5]) || 8;

if (! inputFilename || ! outputFilename || ! numberOfPasswords) {
  console.error(`Usage: node ${path.basename(process.argv[1])} <input filename> <output filename> <number of passwords> [<min length>]`); //eslint-disable-line no-console
  return 1;
}

const passwords = readPasswords(inputFilename, minLength, numberOfPasswords);
const encoder = new Encoder();
const encodedPasswords = encoder.encode(passwords);

/*eslint-disable no-console*/
const output = `/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = \`${encodedPasswords.join('\n')}\`;

`;

fs.writeFileSync(outputFilename, output, { encoding: 'utf8' } );
