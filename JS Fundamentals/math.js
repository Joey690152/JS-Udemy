const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// math object 
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4); // rounds up
val = Math.floor(2.8); // rounds down
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 67, 98);
val = Math.max(2, 33, 67, 98);
val = Math.random();

val = Math.random() * 20 + 1; // number between 0 - 20
val = Math.floor(Math.random() * 20 + 1); // this is same as above except no decimal

console.log(val);