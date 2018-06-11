# fxa-common-password-list

Check whether a password is common.

## Usage:
```js
const commonPassworList = requir('fxa-common-password-list');

// returns true
commonPassworList.test('password')
```

## Generating bloomfilter data
Bloom filter data can be generated from a list
of passwords. The input list is expected to be
sorted from most to least common, one password
per line. The output file is a JSON file
that can be included in `./src/passwordcheck.js`

> node scripts/plaintext2bloom.js ./source_data/10_million_password_list_top_1M.txt ./src/bloomdata-top-10k 10000

## License:
MPL-2.0

