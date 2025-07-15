#!/usr/bin/node

const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
//  This code checks if a size is provided as an argument and prints a square of 'X' characters of that size. If no size is provided, it prints 'Missing size'.