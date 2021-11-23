// var, let, const

var name = 'John Doe';
name = 'steve smith'; // re-assigned 'name' from John doe to steve smith. only works on VAR and LET
console.log(name);

// Init var 
var greeting;
console.log(greeting) // returns undefined
greeting = 'Hello';
console.log(greeting) // returns hello

// letters, number, _, $
// Can not start with a number
var 1name = 'John' // returns error

// Multi word var
var firstName = 'John' // camel case
var first_name = 'Sara' // Underscore
var FirstName = 'Tom' // Pascal Case

// let
let name = 'John Doe';
name = 'steve smith'; // re-assigned 'name' from John doe to steve smith. only works on VAR and LET
console.log(name);

//const 
const name = 'John'; // cannot re-assign a const

const greeting; // has to have a value assigned e.g const greeting = 

const person = { // assigns multiple value to person
  name: 'john',
  age: 30
}

person.name = 'sara'; // can change value this way

// arrays
const numbers = [1, 2, 3, 4, 5];
numbers = [1, 2, 3, 4, 5, 6]; // wouldnt work if i wanted to add.
numbers.push(6); // correct way to add to the array
