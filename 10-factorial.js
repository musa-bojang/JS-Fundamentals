#!/usr/bin/node

const num = parseInt(process.argv[2]);

function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));

// This code calculates the factorial of a number provided as an argument. If the argument is not a number or is zero, it returns 1. Otherwise, it recursively calculates the factorial and prints the result.