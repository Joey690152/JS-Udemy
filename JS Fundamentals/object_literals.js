const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'Steve.Smith@hotmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'Florida'
  },
  getBirthYear: function () {
    return 2020 - this.age; // deducts age from the return value to show year born i.e 2020-30 years = 1990
  }
}

let val;

val = person;
//get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1]; //returns just sports, remove [1] for all array
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Jess', age: 40 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}