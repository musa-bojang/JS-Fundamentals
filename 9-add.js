
const exVal = parseInt(process.argv[2]);
const exVal2 = parseInt(process.argv[3]);

if (isNaN(exVal || isNaN(exVal2))) { 
    console.log('Please write a number');
} else {
    console.log(exVal + exVal2);
}