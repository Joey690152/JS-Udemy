let val;

const today = new Date();
let birthday = new Date('10-25-1996 11:20:00');
birthday = new Date('October 25 1996');
birthday = new Date('10/25/1996');

val = today.getMonth(); // 0 based so 0 = jan
val = today.getDate();
val = today.getDay(); // 1 = Monday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log(birthday);