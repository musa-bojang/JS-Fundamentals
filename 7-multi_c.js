#!/usr/bin/node

const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) console.log('C is fun');
}
//  This code checks if a number is provided as an argument and prints 'C is fun' that many times. If no number is provided, it prints 'Missing number of occurrences'.