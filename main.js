
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

}
