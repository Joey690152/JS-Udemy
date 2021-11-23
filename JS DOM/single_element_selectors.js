// // document.getElementByID()

// console.log(document.getElementById('task-title'));

// // get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none'; used to hide and normally use for click events

// // change content 
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; // will only get the rest one
document.querySelector('ul li').style.color = 'blue'; // will only get the rest one

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'hello world';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //only does the first odd number as its a single element selector. use querySelectorAll 