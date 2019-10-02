/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const { Decoder } = require('incremental-encoder').default;
const encodedPasswords = require('./encoded-passwords');

const decoder = new Decoder();
const commonPasswords = decoder.decode(encodedPasswords.split('\n'));

module.exports = {
  test(password) {
    return commonPasswords.indexOf(password) > -1;
  }
};
