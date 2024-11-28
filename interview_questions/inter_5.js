function findingNonRepeatingChar(string) {
  let char = {};

  for (const str of string) {
    if (char[str]) {
      char[str] += 1;
    } else {
      char[str] = 1;
    }
  }
  for (const str of string) {
    if (char[str] === 1) {
      return str;
    }
  }
  return null;
}

console.log(findingNonRepeatingChar("findingNonRepeatingChar"));
