// function declarations

function greet(firstName = 'John', lastName = 'Doe') {
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// Function Expressions

const square = function (x = 3) {
  return x * x;
};

// console.log(square());

//  immidiately invokable function expressions

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello ' + name);
// })('Joey');

// property methods

const todo = {
  add: function () {
    console.log('Add todo..');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();