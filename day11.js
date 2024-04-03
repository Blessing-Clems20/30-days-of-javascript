const numbers = [1, 2, 3, 5]
let [numOne, numTwo, numThree, numFour] = numbers

console.log(numOne, numTwo, numThree, numFour)

/*const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
    ['Blessing', 'Clement']
]
const [frontEnd, backEnd, developer] = fullStack
  
console.log(frontEnd)
console.log(backEnd)
console.log(developer)*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for(const [first, second, third] of fullStack) {
  console.log(first, second, third)
}
/*
const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  }
  let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter) //30 10 200 80
*/
// Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
  //with destructuring

//Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

const personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))

const constants = [2.72, 3.14, 9.81, 37, 100]
let [e,pi, gravity, bodyTemp, boilingTemp] = constants;
console.log(e, pi, gravity, bodyTemp, boilingTemp)

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
/*const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)*/

//Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
let { width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter)

//Iterate through the users array and get all the keys of the object using destructuring
const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
]

for(const {name, scores, skills, age} of users){
  if(skills.length <= 1){
    console.log(name + " has 1 skill")
  }

  // console.log(name, scores, skills, age)
}

//Destructure the countries object print name, capital, population and languages of all countries
/*const countries = [
  ['Finland', 'Helsinki', 234500000, 'Finnish'], 
  ['Estonia', 'Tonia', 12000000, 'Engish'], 
  ['Sweden', 'Stockholm', 24000, 'spanish' ],
  ['Denmark', 'Mark', 3000000, 'English' ],
  ['Norway', 'Way', 34000000, 'wayland']
]
for (const [country, city, population, language] of countries){
  console.log(country, city, population, language)
}*/

/*const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

let [name, skills, [htmScore, cssScore, jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);*/

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
const copyStudent = { ...student };

const updatedFrontEndSkills  = [...student.skills.frontEnd,
  {skill: 'Express', level: 9}
];
console.log(copyStudent);

const updatedBackEndSkills = [
  ...student.skills.dataBase,
  { skill: 'SQL', level: 8 }
];

const updatedDataBaseSkills = [
  ...student.skills.dataScience,
  'SQL'
];

const updatedStudent = {
  ...student,
  skills: {
    ...student.skills,
    frontEnd: updatedFrontEndSkills,
    backEnd: updatedBackEndSkills,
    dataBase: updatedDataBaseSkills,
  }
};

console.log(updatedStudent);


