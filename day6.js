for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

for(let i = 0; i <=10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArr = ['Naija']
// for(let i = 0; i < countries.length; i++){
//     newArr.push(countries[i].join())
// }

// console.log(newArr)

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }



// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }
// const n = 21
// for(let i = n; i <= n; i++){
//     console.log(i)
//}

for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    console.log(line);
}


console.log('i    i^2    i^3');
for (let i = 0; i <= 10; i++) {
    let iSquared = i * i;
    let iCubed = i * i * i;
    console.log(`${i}    ${iSquared}     ${iCubed}`);
}


//how to find even numbers using for loop
let evenNums = []

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        evenNums.push(i);
    }
}
console.log(evenNums)

//how to find odd numbers using for loop

let oddNums = []

for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        oddNums.push(i);
    }
}
console.log(oddNums)

