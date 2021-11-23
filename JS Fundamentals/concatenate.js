const firstName = 'William';
const lastName = 'Johnson';
const age = 24
const str = 'Hello there my name is Joey'
const tags = 'web design, web development, programming'

let val;

val = firstName + lastName; // no space inbetween names

// Concataenation 
val = firstName + ' ' + lastName; // adds space between

// Append (add on)
val = 'Joey ';
val += 'Phillipson'; //this adds onto 

val = 'Hello, my name is ' + firstName + ' and i am ' + age;

// Escaping

val = 'That\'s awesome, I can\'t wait'; // use backslash or double quotes to start

// length 
val = firstName.length;

// concat 
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0]; // prints w as its number 0 2 would be L

// indexOf()
val = firstName.indexOf('l'); // prints 2
val = firstName.lastIndexOf('l'); // prints 3

// charAt()
val = firstName.charAt('2') // prints l
val = firstName.charAt(firstName.length - 1); // gets last character

// substring()
val = firstName.substring(0, 4); // prints will

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split()
val = str.split(' ') //6 value array
val = tags.split(',') //3 value array

//replace()
val = str.replace('Joey', 'Ben');

// includes()
val = str.includes('Hello') //checks to see if its included
console.log(val);