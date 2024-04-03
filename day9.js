// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}
  
// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 6))

// function sayHello() {
//     console.log('Hello')
// }
// setInterval(sayHello, 2000) 

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 3000) // it prints hello after it waits for 2 seconds.

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach(num => console.log(num))
// console.log(sum)


// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))

// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const countriesFind = countries.find((country) => country.length)
console.log(countriesFind)

// used filter to check for countries that includes land
const countriesInclude = countries.filter((country) => country.includes('land'))
console.log(countriesInclude)

//used filter to filter out countries less the 6 
const countriesIncludeSix = countries.filter((country) => country.length < 6)
console.log(countriesIncludeSix)


//used map to get the length of the array
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)


//used map to change the array to uppercase
const countriesToUppercase = countries.map((country) => country.toUpperCase())
console.log(countriesToUppercase)


//used map to cut out the first 3 letters in the array 
const countriesSplice = countries.map((country) => country.toUpperCase().slice(0, 3))
console.log(countriesSplice)

// used filter to find countries that includes land
const countriesFliter = countries.filter((country) => country.includes('land'))
console.log(countriesFliter)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

const bools = [true, false, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

const booles = [true, true, true, true]

const areSomeTrue = booles.some((b) =>  b === true)

console.log(areSomeTrue) 

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
// Use filter to filter out only prices with values.
const productPriceOnly = products.filter((product) => typeof product.price === 'number' && !isNaN(product.price) && product.price !== '')
console.log(productPriceOnly)

const product = products.map((productPrice) => productPrice)

console.log(product)


const trees = [
    'mango', 
    'pawpaw',
    'orange',
    'pinnapple',
    'fruit'
]

const getStringLists = (trees) => {
    return trees
}

console.log(getStringLists(trees))


