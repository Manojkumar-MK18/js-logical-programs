//Program to find Reverse of a string without using built-in method

function findReverse(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) { 
    reverse += str[i];
  }
  console.log(reverse);
}

const string = "Reverse";

findReverse(string);
