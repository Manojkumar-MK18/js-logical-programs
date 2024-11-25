//Find the factorial of given number

//using recursion

function RecursiveFactorial(num) {
  if (num < 0) return "Factorial is not defined for negative numbers";
  if (num === 0 || num === 1) return 1;
  return num * RecursiveFactorial(num - 1);
}

function IterativeFactorial(num) {
  if (num < 0) return "Factorial is not defined for negative numbers";
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

const number = 5;

console.log(RecursiveFactorial(number), "using RecursiveFactorial");
console.log(IterativeFactorial(number), "using IterativeFactorial");
