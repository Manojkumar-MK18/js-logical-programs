//How to check whether a string is palindrome or not

function isPlaindrome(str) {
  const clearNonAlphaChar = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clearNonAlphaChar === clearNonAlphaChar.split("").reverse().join("");
}

const string = "malayalam";

console.log(isPlaindrome(string));
