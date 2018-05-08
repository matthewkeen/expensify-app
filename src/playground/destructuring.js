// Object Destructuring

// const person = {
//   age: 33,
//   location: {
//     city: 'Huddersfield',
//     temp: 92
//   }
// };
// const {name: firstname ='Anonymous', age} = person;

// console.log(`${firstname} is ${age}.`);
// const {temp:temperature, city} = person.location;
// console.log(`It's ${temperature} in ${city}`);


// const book = {
//   name: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// }
// const { name:publisherName = 'self published' } = book.publisher;
// console.log(publisherName); // default to self published

const address = ['89 New Laithe Hill', 'Huddersfield', 'West Yorkshire', 'HD4 6RF'];

console.log(`You are in ${address[1]} ${address[2]}`)

// array destructure we use square brackets []

const [, , state, zip] = address; // ordered list of variable names

console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);