//How to check whether a string is palindrome or not

function isPlaindrome(str) {
  const clearNonAlphaChar = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clearNonAlphaChar === clearNonAlphaChar.split("").reverse().join("");
}

function isPlaindrome1(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return "Not Pallindrome";
    }
  }
  return "Pallindrome";
}

const string = "malayalam";

console.log(isPlaindrome(string), "build-in methode");
console.log(isPlaindrome1(string), "without build-in methode");
