
const readPasswords = require('./lib/read-passwords');

const inputFilename = process.argv[2];
const numberOfPasswords = parseInt(process.argv[3]);
const minLength = parseInt(process.argv[4]) || 8;

if (! inputFilename || ! numberOfPasswords) {
  console.error('usage: node filter-list.js <input filename> <number of passwords> [<min length>]'); //eslint-disable-line no-console
  return 1;
}

const passwords = readPasswords(inputFilename, minLength, numberOfPasswords);

passwords.forEach(password => {
  console.log(password); //eslint-disable-line
});


