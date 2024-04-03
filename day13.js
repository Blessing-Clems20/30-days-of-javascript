console.log('%d %s of JavaScript', 30, 'Days')
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text

console.error('This is an error message')
console.error('We all make mistakes')

/*const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
]
console.table(users)

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}*/

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)
console.group(countries)
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

//10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10)


console.warn('this is a warning')


console.error('This is an error')

// Test data
const arr = new Array(1000000).fill(0).map((_, index) => index);

// While loop
let startTime = performance.now();
let i = 0;
while (i < arr.length) {
    arr[i]++;
    i++;
}
let endTime = performance.now();
console.log('While loop:', endTime - startTime, 'milliseconds');

// For loop
startTime = performance.now();
for (let i = 0; i < arr.length; i++) {
    arr[i]++;
}
endTime = performance.now();
console.log('For loop:', endTime - startTime, 'milliseconds');

// For...of loop
startTime = performance.now();
for (const num of arr) {
    num++;
}
endTime = performance.now();
console.log('For...of loop:', endTime - startTime, 'milliseconds');

// forEach loop
startTime = performance.now();
arr.forEach((num, index, array) => {
    array[index]++;
});
endTime = performance.now();
console.log('forEach loop:', endTime - startTime, 'milliseconds');




