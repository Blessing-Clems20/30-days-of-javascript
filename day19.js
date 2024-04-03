/*function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)

function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())*/

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function mutiplyTwo() {
        count
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        mutiplyTwo:mutiplyTwo()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.mutiplyTwo)

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







