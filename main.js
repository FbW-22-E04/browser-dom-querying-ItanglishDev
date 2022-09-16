
const body = document.querySelector('body')

body.style.fontFamily = 'Arial'

// document.body.style.fontFamily = '

const hOne = document.querySelector('h1')

hOne.style.textAlign = 'center'

const menuHeadings = document.querySelectorAll('.category')

// if (menuHeadings) {
for (const el of menuHeadings) {

  el.style.color = 'red'
  el.style.fontFamily = 'Times New Roman'
  el.style.fontSize = "1.6rem"
}


const randomColours = ['blue', 'green', 'magenta', 'purple']

const unorderedList = document.querySelectorAll('.food-category')

function colorGenerator() {

  for (const el of unorderedList) {

    el.style.color = randomColours[Math.floor(Math.random() * 3 + 1)]
  }
}
colorGenerator()

const mainHtml = document.querySelector('.main')

mainHtml.style.display = 'flex'
mainHtml.style.justifyContent = 'center'

// unorderedList.style.flexDirection = 'row'

// unorderedList.style.display = 'flex'


