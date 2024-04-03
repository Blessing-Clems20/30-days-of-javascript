const PI = 3.14
let radius = 100          

const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)

const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37    

// console.log(
//   `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
// )

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

alert('Welcome to 30DaysOfJavaScript')

// let number = prompt('Enter number', 'number goes here')
// console.log(number)

const now = new Date()
console.log(now) 

const nownew = new Date()
console.log(nownew.getFullYear())

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types

let firstName2 = "John"
let lastName = "Doe"
let country = "Naija"
let city = "Abj"
let age = 32
let isMarried = true
let year = 2024

console.log(typeof firstName2)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

let num = 10 === '10'
console.log(num)

let newNum = parseInt(9.8) === 10
console.log(newNum)

/*Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/

let myNameIsBlessing = true
let value = 4 > 5
let reture = false

console.log(myNameIsBlessing)
console.log(value)
console.log(reture)

let try0 = 4 > 3 //true
let try1 = 4 >= 3 //true
let try2 = 4 < 3 //false
let try3 = 4 <= 3 //false
let try4 = 4 == 4 //true
let try5 = 4 === 4 //true
let try6 = 4 != 4 //false
let try7 = 4 !== 4//false
let try8 = 4 != '4' //true
let try9 = 4 == '4'// true
let try10 = 4 === '4' //false 

console.log(try10)

//Find the length of python and jargon and make a falsy comparison statement
let word1 = 'python'
let word2 ='jargon'
console.log(word1.length)
console.log(word2.length)

let word3 = word1 === word2
console.log(word3)

let try11 = 4 > 3 && 10 < 12 //false
let try12 = 4 > 3 && 10 > 12 //true
let try13 = 4 > 3 || 10 < 12//true
let try14 = 4 > 3 || 10 > 12//true
let try15 = !(4 > 3)//false
let try16 = !(4 < 3)//true
let try17 = !(false)//true
let try18 = !(4 > 3 && 10 < 12)//true
let try19 = !(4 > 3 && 10 > 12)//true
let try20 = !(4 === '4')//true

console.log(try20)


const yearToday = new Date()
console.log(yearToday.getFullYear())

// let base  = prompt('Enter base', 'number goes here')
// let height1  = prompt('Enter height', 'number goes here')
// let angle = 0.5 * base * height1
// console.log(
//   `Enter base ${base}.Enter height ${height1}. Ther area of a triangle is ${angle} m / s2.`
// )

// let a  = prompt('Enter value for side A', 'number goes here')
// let b  = prompt('Enter Value for side B', 'number goes here')
// let c = prompt('Enter value for sideC', 'number goes here')
// let peri  = (perimeter = a + b + c)
// console.log(
//   `Enter a ${a}.Enter b ${b}. Enter c ${c}.The area of a perimeter of a triangle is ${perimeter} `
// )


//THIS SESSION IS WORKING
//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120

/*let hours = prompt('Enter working hours', ' ')
let ratePerHour = prompt('Enter earning per hour', ' ')
let weeklyEarning = (hours * ratePerHour)
console.log(
  `Working hour ${hours}. Working rate ${ratePerHour}. Weekly Earning ${weeklyEarning}`
)*/

//THIS SESSION WORKED
//If the length of your name is greater than 7 say, your name is long else say your name is short.
/*let ble = "blessing"
ble.length > 7
  ? console.log(`${ble} your name is long`)
  : console.log(`${ble} your name is short`)
*/


  
/*let fName = "blessing"
let lName = "Adejumohclement"

  ? fName.length > lName.length
  : console.log(`${ble} your name is short`)
  
*/
//THIS SESSION WORKED
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
/*let myAge = 250
let yourAge = 25
let ageDiff = myAge - yourAge

console.log(
  `I am older than you with ${ageDiff}`
)*/

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt('Enter your year of birth (YYYY)', 'YYYY');
const currentYear = new Date().getFullYear();
const newAge = currentYear - birthYear;
newAge >= 18 
 ? console.log|('you are old enough to drive')
 : console.log(`you are too young to drive. please wait ${18 - newAge} more years`);




