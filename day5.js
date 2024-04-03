// const arr = Array()

// console.log(arr)

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// console.log('Numbers', numbers.length)
// console.log('Fruits', fruits)
// console.log('Fruits', fruits.length)

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// num[0] = 0;
// num[3] = 9;
// console.log(num)

const arr = []
console.log(arr)

const line = [ 2, 3, 3, 4, 5, 6]
console.log(line[5])

const mixedDataType = [
    'string',
    2,
    [1, 2, 3],
    'second string',
    23,
    [34,76,23]
];
console.log(mixedDataType.length)

const itCompanies = [
    'facebook',
    'google',
    'microsoft',
    'apple',
    'iBM',
    'oracle',
    'amazon'
];
// let company = itCompanies[0, 1,2,3,4,5,6].toUpperCase()

// console.log(itCompanies)
// console.log(itCompanies.length)
// console.log(itCompanies[0])
// console.log(itCompanies[3])
// console.log(itCompanies[6])
// console.log(company)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// if (itCompanies.includes('oracle')) {
//     console.log('The array includes oracle')
// } else {
//     console.log('The array does not include oracle')
// }



console.log(itCompanies.splice(0,6))
itCompanies.length = 0
console.log(itCompanies)


let text =
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(text.tr)
console.log(text.length)

/*add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

// i added item to an array
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift("Meat")
// shoppingCart.push("Sugar")
shoppingCart[2] = 'Green tea'
shoppingCart.splice(3,1)
console.log(shoppingCart)

const indexRemove = shoppingCart.indexOf('Honey');
if(indexRemove !== -1){
    shoppingCart.splice(indexRemove,1)
}
console.log(shoppingCart);

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
    'Kenya'
]
console.log(countries.indexOf('ETHOPIA'))

