function countChar(str) {
  let counts = {};

  for (let char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}

const string = "Hi manojkumar how r u";

console.log(countChar(string));
