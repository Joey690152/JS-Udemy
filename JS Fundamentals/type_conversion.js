let val;

// number to string 
val = 555;
val = String(555); // converted to string from above
val = String(4 + 4);
// boolen to string
val = String(true);
// date to string 
val = String(new Date());
// array to string 
val = String([1, 2, 3, 4]);

// toString() Method
val = (5).toString();
val = (true).toString();

// string to numbers 
val = '5';
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // NaN in console 
val = Number([1, 2, 3]); // NaN in console 

val = parseInt('100');
val = parseFloat('100.31'); // if you want decimals


// output 
// console.log(val);
// console.log(typeof val);
// console.log(val.length); // only works on strings
// console.log(val.toFixed()); // only works on numbers

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);