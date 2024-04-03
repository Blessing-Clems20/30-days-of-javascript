/*localStorage.setItem('firstName', 'Blessing') // since the value is string we do not stringify it
console.log(localStorage)

localStorage.setItem('age', 200)
console.log(localStorage)

const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

// let skills = [
//     { tech: 'HTML', level: 10 },
//     { tech: 'CSS', level: 9 },
//     { tech: 'JS', level: 8 },
//     { tech: 'React', level: 9 },
//     { tech: 'Redux', level: 10 },
//     { tech: 'Node', level: 8 },
//     { tech: 'MongoDB', level: 8 }
// ]
  
// let skillJSON = JSON.stringify(skills)
// localStorage.setItem('skills', skillJSON)

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}
  
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skill = localStorage.getItem('skills')
console.log(firstName, age, skills)

let skil = localStorage.getItem('skills');
let skillsObj = JSON.parse(skil, undefined, 4);
console.log(skillsObj);

localStorage.clear()*/


localStorage.setItem('firstName', 'Blessing') 
localStorage.setItem('lastName', 'Clement') 
localStorage.setItem('country', 'Nigeria') 
localStorage.setItem('city', 'Abuja') 
console.log(localStorage)

const student = {
    firstName: 'blessing',
    lastName: 'clement',
    age: 25,
    skills: [
        'HTML',
        'CSS',
        'BOOTSTRAP',
        'MySQL',
        'Javascript',
        'ReactJs'
    ],
    country: 'Nigeria'

}

const studentInfo = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentInfo)

const personalInfo = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: {
        salary: 100000,
        contribution: 50000,
        sideHustle: 20000
    },
    addExpense: {
        transport: 30000,
        food: 20000,
        miscelenous: 20000
    },
    accountBalance: 100000
}

const personalAccount = JSON.stringify(personalInfo, undefined, 4)
localStorage.setItem('personalInfo', personalAccount)
console.log(personalAccount)