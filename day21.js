// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'*/

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

/*//Exercise 
const firstTag = document.getElementsByTagName('p')[0]
console.log(firstTag)*/

//Get each of the the paragraph using document.querySelector('#id') and by their id
// const selectPara = document.querySelectorAll('p')
// console.log(selectPara.length)
// for (let i = 0; i < selectPara.length; i++){
//   console.log(selectPara)
// }
// selectPara.forEach(title => console.log(title))
// const selectPara =
// console.log(selectPara)

