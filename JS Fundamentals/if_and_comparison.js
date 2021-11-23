// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

//// equal to 
// if(id == 100){ //double == is a comparison. so 101 == incorrect as doesnt match 100 
//   console.log('CORRECT')
// } else {
//   console.log('Incorrect')
// }

// // not equal to 
// if (id != 101) { // != is not equal to 
//   console.log('CORRECT')
// } else {
//   console.log('Incorrect')
// }

// // equal to value and type
// if (id === '100') { // shows incorrect as const id is not a string although value is correct
//   console.log('CORRECT')
// } else {
//   console.log('Incorrect')
// }

// // not equal to value and type
// if (id !== 100) { // shows incorrect as const id is not a string although value is correct
//   console.log('CORRECT')
// } else {
//   console.log('Incorrect')
// }

// // test if undefined 
// if(typeof id !== 'undefined'){ // need to comment out the rest for this to work
//   console.log(`the ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// // greater than or less than 
// if(id >= 200){ // >= means greater than or equal too <= same but opposite
//   console.log('CORRECT')
// } else {
//   console.log('Incorrect')
// }

// if else 

const color = 'yellow'

// if(color === 'red'){
//   console.log('color is red')
// } else if(color === 'blue'){
//   console.log('color is blue')
// } else {
//   console.log('color is not red or blue')
// }

// logical operators 

const name = 'Steve';
const age = 19;

// and &&
if (age >= 0 && age <= 12) { // && represents and
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`);
}

// or ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`)
} else {
  console.log(`${name} is registered for the race`)
}

// ternary operator
console.log(id === 100 ? 'correct' : 'Incorrect'); // ? means if this is true : means else

// without braces

if (id === 100)
  console.log('correct')
else
  console.log('incorrect')