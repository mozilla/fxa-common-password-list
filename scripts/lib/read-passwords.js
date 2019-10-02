const fs = require('fs');

module.exports = (inputFilename, minLength, maxCount) => {
  const data = fs.readFileSync(inputFilename, 'utf8');

  const passwords = filterPasswords(data.split('\n'), minLength, maxCount);
  return passwords.map(password => password.trim()).filter(password => !! password.length);
};

function filterPasswords(passwords, minLength, maxCount) {
  const set = new Set();

  for (let i = 0; set.size < maxCount && passwords[i]; ++i) {
    const password = passwords[i].toLowerCase();
    if (password.length >= minLength && ! set.has(password)) {
      set.add(password);
    }
  }

  return Array.from(set).sort();
}
