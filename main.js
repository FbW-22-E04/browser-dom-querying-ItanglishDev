
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

// unorderedList.style.flexDirection = 'row'

// unorderedList.style.display = 'flex'
const mainHtml = document.querySelector('.main')



function modifyForDesktop(elem) {
  if (elem.matches) {
    mainHtml.style.display = 'flex'
    mainHtml.style.justifyContent = 'center'
  }
  else {

    mainHtml.style.display = 'flex'
    mainHtml.style.flexDirection = 'column'
    mainHtml.style.alignItems = 'center'

  }
}
const atDeskTop = window.matchMedia('(min-width: 600px)')

atDeskTop.addListener(modifyForDesktop)
modifyForDesktop(atDeskTop)

