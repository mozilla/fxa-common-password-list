
const readPasswords = require('./lib/read-passwords');

const { BloomFilter } = require('bloomfilter');

const inputFilename = process.argv[2];
const numberOfPasswords = parseInt(process.argv[3], 10);
const numberOfHashes = parseInt(process.argv[4]) || 8;
const numberOfBitsPerItem = parseInt(process.argv[5]) || 10;

if (! inputFilename || ! numberOfPasswords) {
  console.error('usage: node plaintext2bloom.js <input filename> <number of passwords> [<number of hashes>] [<number of bits per hash>]'); //eslint-disable-line
  return 1;
}

const passwords = readPasswords(inputFilename, 8, numberOfPasswords);
const bloom = new BloomFilter(
  numberOfBitsPerItem * passwords.length,  // number of bits to allocate
  numberOfHashes  // number of hash functions.
);

passwords.forEach(pwd => {
  bloom.add(pwd);
});

const array = [].slice.call(bloom.buckets);

// ensure the output file has the necessary requirejs constructs.
const output = `${JSON.stringify({
  numberOfHashes: numberOfHashes,
  bloomFilterData: array
})}`;

console.log(output); //eslint-disable-line
