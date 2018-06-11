
const fs = require('fs');
const { BloomFilter } = require('bloomfilter');

const inputFilename = process.argv[2];
const outputFilename = process.argv[3];
const numberOfPasswords = parseInt(process.argv[4], 10);
const numberOfHashes = process.argv[5] || 8;

if (! (inputFilename && outputFilename)) {
  console.error('usage: node plaintext2bloom.js <input filename> <output filename> <number of passwords> [<number of hashes>]'); //eslint-disable-line
  return 1;
}

fs.readFile(inputFilename, 'utf8', (err, data) => {
  if (err) {
    return console.error(err); //eslint-disable-line
  }

  const passwords = filterPasswords(data.split('\n'), numberOfPasswords);
  const bloom = new BloomFilter(
    10 * passwords.length,  // number of bits to allocate per item
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

  fs.writeFileSync(outputFilename, output);
});


function filterPasswords(passwords, maxCount) {
  const set = {};
  let setCount = 0;

  for (let i = 0; setCount < maxCount && passwords[i]; ++i) {
    const password = passwords[i].toLowerCase();
    if (password.length >= 8 && ! set[password]) {
      set[password] = true;
      setCount++;
    }
  }

  return Object.keys(set);
}
