
const exVal = parseInt(process.argv[2]);
const exVal2 = parseInt(process.argv[3]);

if (isNaN(exVal || isNaN(exVal2))) { 
    console.log('Please write a number');
} else {
    console.log(exVal + exVal2);
}
// This code checks if two numbers are provided as arguments and prints their sum. If either argument is not a number, it prints 'Please write a number'.