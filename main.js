
const body = document.querySelector('body')

body.style.fontFamily = 'Arial'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
// mainHtml.style.display = 'flex'
// mainHtml.style.flexDirection = 'column'
// mainHtml.style.alignItems = 'center'
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

const randomColours = ['Azure', 'cornSilk', 'BlanchedAlmond', 'BurlyWood', 'CornflowerBlue']

const unorderedList = document.querySelectorAll('.food-category')

function colorGenerator() {

  for (const el of unorderedList) {

    el.style.backgroundColor = randomColours[Math.floor(Math.random() * 3 + 1)]
    // el.style.leftMargin = '1px'
  }
}
colorGenerator()

// unorderedList.style.gap = ''

// unorderedList.style.flexDirection = 'row'

// unorderedList.style.display = 'flex'
const mainHtml = document.querySelector('.main')



function modifyForDesktop(elem) {
  if (elem.matches) {
    mainHtml.style.display = 'flex'
    mainHtml.style.justifyContent = 'space-around'

  }
  else {

    mainHtml.style.display = 'flex'
    mainHtml.style.flexDirection = 'column'
    // mainHtml.style.alignItems = 'center'


  }
}
const atDeskTop = window.matchMedia('(min-width: 700px)')

atDeskTop.addListener(modifyForDesktop)
modifyForDesktop(atDeskTop)

const warningAtEnd = document.getElementById('warning')

warningAtEnd.style.fontSize = '2rem'

const allergies = document.querySelector('.allergies')

// allergies.style.textAlign = 'center'
allergies.style.listStyleType = 'none'

const allergiesEven = document.querySelector('.allergy-warning li:nth-child(even)')

allergiesEven.style.backgroundColor = 'lightgreen'



