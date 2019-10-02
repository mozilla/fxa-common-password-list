/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var path = require('path');
const readPasswords = require('./lib/read-passwords');

var inputFilename = process.argv[2];
if (! inputFilename) {
  console.error('usage: node analyze.js <input filename>'); //eslint-disable-line
  return 1;
}

var fileToAnalyzePath = path.join(__dirname, inputFilename);

var passwords = readPasswords(fileToAnalyzePath, 0, Infinity);

var shortestWord;
var minLength = passwords.reduce(function (accumulator, password) {
  if (password.length < accumulator) {
    shortestWord = password;
    return password.length;
  }
  return accumulator;
}, Infinity);

var longestWord;
var maxLength = passwords.reduce(function (accumulator, password) {
  if (password.length > accumulator) {
    longestWord = password;
    return password.length;
  }
  return accumulator;
}, 0);

console.log('total: %d, min length %d (%s), max length: %d (%s)', //eslint-disable-line
  passwords.length, minLength, shortestWord, maxLength, longestWord);

