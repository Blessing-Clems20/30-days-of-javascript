// let isRaining = true
// if (isRaining) {
//   console.log('Remember to take your rain coat.')
// }

// let num = 3
// if (num > 4) {
//   console.log(`${num} is a positive number`)
// }

// THIS SESSION WORKED
/*let ageStr = prompt('Enter age here', '10')
let age = parseInt(ageStr)
console.log(ageStr)
if (age > 18){
  console.log('You are old enough to drive')
} else if (age < 18){
  console.log(`you have to wait ${18 - age} before you can drive`)
} else{
  console.log('You did not enter a number')
} */

// THIS SESSION WORKED
/*let myAge = 30
let yourAge =  prompt('Enter your age here', ' ')
let newAge = parseInt(yourAge)
if (myAge > newAge) { 
  console.log(`I'm older ${myAge - newAge} than you`)
  
} 
else if (myAge < newAge) {
  console.log(`you are ${newAge - myAge} younger than I`)
} 
else if (myAge == newAge) {
  console.log('we are agemate')
}
else{
  console.log('this field only accept numbers')
}*/

//

//THIS SESSION IS WORKING tenarary operator
// let a = 4
// let b = 3
// if (a > b) {
//   console.log('a is greater than b')
// } else {
//   console.log('a is less than b')
// }
// let number = 4
// number < 3
// ? console.log(`${number} is less than 4`)
// : console.log(`${number} is greater than 4`)

//THIS SESSION IS WORKING
// let even = prompt('Enter number', '')
// even = parseInt(even)
// let dev = 2
// let newEven = 22 / 2

// if (even % 2 === 0 ) {
//   console.log(`Enter number ${even}. ${even} is an even nuber`)
// } else {
//   console.log(`Enter number ${even}. ${even} is an odd number`)
// }

//WORKING BUT NEEDS A LITTLE ADJUSTMENT
// let studentScore = prompt("Enter student score", "");
// score = parseInt(studentScore);

// if (!isNaN(score) && score >= 0 && score <= 100) {
//   if (score >= 80) {
//     console.log(`Your score is ${score}. You got an A, congrats`);
//   } else if (score <= 79) {
//     console.log(`Your score is ${score}. You got a B, congrats`);
//   }else if (score <= 69 ) {
//     console.log(`Your score is ${score}. You got a C, congrats`);
//   }
//   else if (score <= 59) {
//     console.log(`Your score is ${score}. You got a D, very poor`);
//   }
//   else if (score <= 49){
//     console.log(`Your score is ${score}. You got an F, you failed this course`);
//   }
// } else {
//   console.log("invalid input, please enter a number between 1 - 100");
// }

//THIS SESSION IS WORKING FINE
// let seasonUserInput = prompt("Enter mon of year", "");
// let season = seasonUserInput.toLowerCase();

// switch (season) {
//   case "september":
//   case "october":
//   case "november":
//     console.log("Autumn season");
//     break;
//   case "january":
//   case "february":
//   case "decemeber":
//     console.log("Winter Season");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log("Spring Season");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log("summer Season");
//     break;

//   default:
//     console.log("this is not a month of the year");
//     break;
// }

// let dayInput = prompt("Enter Day of the week", "");
// let day = dayInput.toLowerCase();

// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log(`${day} is week day`);

//     break;
//   case "saturday":
//   case "sunday":
//     console.log(`${day} is weekend`);
//     break;
//   default:
//     console.log("you did not enter a day");
//     break;
// }

let monthInput = prompt("Enter month", "");
let month = monthInput.toLowerCase();

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    return 31;
  case "april":
  case "june":
  case "september":
  case "november":
    return 30;
  case "february":
    return 28; 
  default:
    return -1;
}
