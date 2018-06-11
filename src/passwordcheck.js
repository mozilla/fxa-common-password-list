/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const { BloomFilter } = require('bloomfilter');
const bloomdata = require('./bloomdata-top50k.json');

const passwordSet = new BloomFilter(bloomdata.bloomFilterData, bloomdata.numberOfHashes);

module.exports = {
  test: (password = '') => passwordSet.test(password.toLowerCase())
};
