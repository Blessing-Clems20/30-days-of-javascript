/*function square() {
   let num = 2
   let tsquare = num * num
   console.log(tsquare)  
};
square()

function twoNums() {
    let numsOne = 10
    let numsTwo = 24
    let sum = numsOne + numsTwo
    console.log(sum)
}
twoNums()

function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() 

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
  
console.log(areaOfCircle(10))

function pullName(firstName,  lastName) {
    return`${firstName} ${lastName}`
}
console.log(pullName('Blesssing', 'CLement'))

function sumArrayValues(arr) {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    } return sum;
}
const numb = [1, 2, 3, 4, 5, 6, ];

console.log(sumArrayValues(numb))

const changeCase = arr => {
    const newArr = []
    for(const element of arr){
        newArr.push(element.toUpperCase())
    } return newArr
}

const countries = ['finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeCase(countries))

const states = ['Abuja', 'Niger','Oyo', 'Lagos', 'abia']
console.log(changeCase(states))*/

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName('Blessing', 'Clement'))

const addNumbers = [1, 2, 3, 4, 5, 6]
function sumNubers(two) {
    let sum = 0
    for(let i = 0; i<two.length; i++){
        sum = sum + two[i];
    } return sum;
}

console.log(sumNubers(addNumbers))


function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(4, 5))

function perimeterOfRectangle(length, width) {
    let area = length + width
    return area
}
console.log(perimeterOfRectangle(4, 5))

function volumeOfRectPrism(length, width, height) {
    let prism = length * width * height
    return prism
}
console.log(volumeOfRectPrism(4, 5, 7))

// function circumOfCircle(r) {
//     let area = Math.PI * r 
//     return circumference
// }

// console.log(circumOfCircle(2))




//exercise 3
/*function userIdGeneratedByUser(){
    let numChar = parseInt(prompt('Enter numbers of characters for user ID '))
    let numId = parseInt(prompt('Enter the number of IDs to generate'))

    let userIDs = []
    for (let i = 0; i < numId; i++) {
        userIDs.push(generateUserId(numChar));
    }
    return userIDs
}
function generateUserId(numChar){
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let userId = ''
    for (let i = 0; i < numChar; i++){
        userId += characters.charAt(Math.floor(Math.random() * characters.length))
    } return userId;
}

console.log(userIdGeneratedByUser())*/

function rgbColorGenerator() {
    
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}
console.log(rgbColorGenerator());


function arrayOfHexaColors(numColors) {
    let colors = [];
    for (let i = 0; i < numColors; i++) {
        colors.push(generateHexaColor());
    }
    return colors;
}

function generateHexaColor() {
    let hexaColor = '#';
    for (let i = 0; i < 6; i++) {
        hexaColor += Math.floor(Math.random() * 16).toString(16); // Generate a random hexadecimal digit (0-9, a-f)
    }
    return hexaColor;
}

// Example usage
console.log(arrayOfHexaColors(7));

function shuffleArray(arr) {
    for (let i =arr.length - 1; i > 0; i--){
        const j =Math.floor(Math.random() * (i + i))
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } return arr
}

const arr = [
    'yam',
    'beans',
    'rice',
    'stew',
    'meat'
]

