// class Person {
//     // code goes here
// }
// const person = new Person()
// console.log(person)

class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person('Blessing', 'Clement')
const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person)
console.log(person1)
console.log(person2)
console.log(person3)


