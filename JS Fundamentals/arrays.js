// create some arrays
const numbers = [43, 46, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Bannana', 'Orange', 'Pear']; // string array
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// get array length
val = numbers.length;
// check if array
val = Array.isArray(numbers);
// get single value
val = numbers[3]; // brings up 23 as start from 0 
val = numbers[0]; // brings up 43
// insert into array
numbers[2] = 100;
// find index of a value 
val = numbers.indexOf(36) // brings up 5 as 36 in 5 position

// Mutating arrays
numbers.push(250); //adds onto end of array
numbers.unshift(120); //adds onto the front
numbers.pop() // removes from end
numbers.shift() // removes from start
numbers.splice(1, 1) // remove from a specific location
numbers.splice(1, 3) // remove from a specific location
numbers.reverse(); // reverse order

// concatenate array 
val = numbers.concat(numbers2);

// sorting arrays 
val = fruit.sort(); // alphabetical order (doesnt work on numbers)

// use the compare function to sort numbers in order (smallest to largest)
val = numbers.sort(function (x, y) {
  return x - y;
});

// reverse sort (largest to smallest)
val = numbers.sort(function (x, y) {
  return y - x;
});

//find first number in the array under 50 (keep in mind i have sorted from original array)
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);