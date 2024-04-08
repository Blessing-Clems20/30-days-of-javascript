/*let challange = " 30 days of javascript "
console.log(challange.length)

console.log(challange.toUpperCase())

console.log(challange.toLowerCase())

console.log(challange.substring(3, 21))

console.log(challange.includes("script"))

console.log(challange.split())

console.log(challange.split(' '))

console.log(challange.replace("javascript", "python"))

console.log(challange.charAt(20))

console.log(challange.indexOf("a"))

console.log(challange.lastIndexOf("a"))

console.log(challange.trim(" "))

console.log(challange.startsWith("challange"))

console.log(challange.match("a"))

console.log(challange.concat("30 days, of' javascript"))

console.log(challange.repeat(5))

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf("because"))

console.log(sentence.lastIndexOf("because"))

console.log(sentence.search("because"))



let countries = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(countries.split(', '))


// Exercise 2

let john = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(john)

let teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(teresa)

console.log(typeof 10)
console.log(parseFloat('9.8'))

let parseNumber = parseFloat(9.8)
if (parseNumber !== 10) {
 
    parseNumber = 10;
}
console.log(parseNumber)

const word1 = 'python';
const word2 = 'jargon';


const isInWord1 = word1.includes('on');
const isInWord2 = word2.includes('on');


console.log(`'on' found in 'python': ${isInWord1}`);
console.log(`'on' found in 'jargon': ${isInWord2}`);

let para = 'I hope this course is not full of jargon.'
console.log(para.includes('jargon'))

const randomNumber = Math.floor(Math.random() * 101); 
console.log(randomNumber);

const randomBetween50And100 = Math.floor(Math.random() * (101 - 50) + 50);
console.log(randomBetween50And100);

const randomBetween0And255 = Math.floor(Math.random() * 256);
console.log(randomBetween0And255);

const str = 'JavaScript';
const randomIndex = Math.floor(Math.random() * str.length);
const randomCharacter = str.charAt(randomIndex);

console.log(`Random character at index ${randomIndex}: ${randomCharacter}`);


let phase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(phase.search(/love/gi))

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search(/love/gi))

let text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' 

let cleanText = text.replace(/[^\w\s]/gi, '').toLowerCase();
let wordArry = cleanText.split(/\s+/);
let wordFrequnecy = {};
wordArry.forEach(word => {
    if (word in wordFrequnecy){
        wordFrequnecy[word]++;
    }else{
        wordFrequnecy[word] = 1;
    }
});

let mostFrequentWord = '';
let maxFrequency = 0;

for (const word in wordFrequnecy) {
    if (wordFrequnecy[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequnecy[word];
    }
};

console.log('Cleaned Text:', cleanText);
console.log('Most Frequent Word:', mostFrequentWord);
console.log('Frequency:', maxFrequency);*/



// console.log(window.countries)
// console.log(window.webTechs)
let numOne = 3
let numTwo = 3

console.log(numOne === numTwo) 

let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName


let person = 'my name' + space + firstName + lastName + 'i live in' + country
console.log(person)
let personInfo = `My name is ${fullName}, I am from ${city} in ${country}`
console.log(personInfo)

let newStr = '30 Days Of JavaScript'
console.log(newStr.split())



