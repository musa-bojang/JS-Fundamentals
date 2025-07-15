#!/usr/bin/node

const arg = process.argv[2];

if (arg !== undefined) {
  console.log(arg);
} else {
  console.log('No argument');
}

// No argument provided, print 'No argument'