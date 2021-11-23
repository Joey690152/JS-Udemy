let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

// count child element
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.previousElementSibling;


console.log(val);