
const body = document.querySelector('body')

body.style.fontFamily = 'Arial'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
// mainHtml.style.display = 'flex'
// mainHtml.style.flexDirection = 'column'
// mainHtml.style.alignItems = 'center'
// document.body.style.fontFamily = '

//            H1 CENTERED 

const hOne = document.querySelector('h1')

hOne.style.textAlign = 'center'

const menuHeadings = document.querySelectorAll('.category')
// menuHeadings.style.gap = '1rem'
// if (menuHeadings) {
for (const el of menuHeadings) {

  el.style.color = 'red'
  el.style.fontFamily = 'Times New Roman'
  el.style.fontSize = "1.6rem"
  // el.style.gap = '3rem'
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

const mainHtml = document.querySelector('.main')
const footer = document.querySelector('footer')
const footerElements = document.getElementsByClassName('footer .food-desc')
const section = document.querySelectorAll('.food-desc')

function modifyForDesktop(elem) {
  if (elem.matches) {
    mainHtml.style.display = 'flex'
    mainHtml.style.justifyContent = 'space-around'
    // footer.style.flexDirection = 'row'
    footer.style.width = '40%'
    footer.style.display = 'flex'
    footer.style.justifyContent = 'space-around'
    // footerElements.style.padding = '2px'
    // footerElements.style.justifyContent = 'space-between'

    for (const el of section) {
      el.style.marginTop = '2rem'
    }
  }
  else {
    mainHtml.style.flexDirection = 'column'
    footer.style.flexDirection = 'column'
    // footer.style.gap = '10px'
    mainHtml.style.display = 'flex'
    // mainHtml.style.alignItems = 'center'
    // warningAtEnd.style.fontSize = '1rem'
    // h3.style.marginTop = '1rem'
    // section.style.marginTop = '2rem'
  }
}
const atDeskTop = window.matchMedia('(min-width: 600px)')

atDeskTop.addListener(modifyForDesktop)
modifyForDesktop(atDeskTop)

const warningAtEnd = document.getElementById('warning')

warningAtEnd.style.fontSize = '2rem'
const allergies = document.querySelectorAll('.allergy-info')
// console.log(allergies);

for (e of allergies) {
  // console.log(e.textContent);
  e.style.listStyleType = 'none'
}

const evenChildren = document.querySelectorAll('.allergies :nth-child(even)')
// console.log(evenChildren);
for (const e of evenChildren) {
  e.style.backgroundColor = 'lightgreen'
}

const h3 = document.getElementsByClassName('food-desc')
// footer.style.display = 'flex'
// h3.style.fontSize = 'large'
for (const el of h3) {
  el.style.border = '4px solid yellow'
  el.style.width = '6rem'
  el.style.height = '4rem'
  el.style.textAlign = 'center'
  el.style.alignItems = 'center'
  el.style.justifyContent = 'center'
  el.style.borderRadius = '50%'

}
console.log(h3);
// oddChildren.style.backgroundColor = 'green'
// allergies.map(e => console.log(e))
// allergies.style.textAlign = 'center'
// allergies.style.listStyleType = 'none'

// const allergiesEven = document.querySelectorAll('.allergy-warning')
// footer.style.flexDirection = 'column'
// footer.style.display = 'flex'

