// const os = require('os');
const fs = require('fs');

const gender = ['M', 'F'];
const maleNames = ['Jo', 'Jim', 'John', 'James', 'Adam'];
const femaleNames = ['Betty', 'Sue', 'Eva', 'Ann', 'Alice'];
const lastName = ['White', 'Brown', 'Red', 'Yellow', 'Blue'];

const randChoice = (arr) => arr[Math.floor(Math.random()*arr.length)];

const people = [];

const selectPerson = () => {
  for(let i = 0; i < 20; i++) {
    const person = {}
    person.gender = randChoice(gender)
    person.firstName = person.gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames)
    person.lastName = randChoice(lastName)
    person.age = Math.floor(Math.random()*61)+18

    const number = () => Math.floor(Math.random()*10)
    person.phone = `${number()}${number()}${number()}-${number()}${number()}${number()}-${number()}${number()}${number()}` 
    person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@.gmail.com`

    people.push(person)
  }
};
selectPerson();

const peopleJSON = JSON.stringify(people)

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

