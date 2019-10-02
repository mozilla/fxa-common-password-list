/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

const { assert } = require('chai');
const passwordcheck = require('../src/passwordcheck');

it('returns `true` when password is in list', () => {
  const badPasswords = ['password', 'password123', '1loveyou'];
  badPasswords.forEach((password) => {
    assert.isTrue(passwordcheck.test(password), password);
  });
});

it('returns `false` when password is not in list', () => {
  const goodPasswords = ['notinyour!', 'combo1234$#', 'JUA7MYM8ni3cgU'];
  goodPasswords.forEach((password) => {
    assert.isFalse(passwordcheck.test(password), password);
  });
});
