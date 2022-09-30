let famly = prompt('Введите имя и фамиля студента')
let famly2 = prompt('Введите имя и фамиля студента')
let famly3 = prompt('Введите имя и фамиля студента')
let famly4 = prompt('Введите имя и фамиля студента')

let text = document.getElementById('name')
let g = document.getElementById('gg')
let f = []
let iii = [
  text.innerHTML = `<li>${famly}</li>`,
  text.innerHTML = `<li>${famly2}</li>`,
  text.innerHTML = `<li>${famly3}</li>`,
  text.innerHTML = `<li>${famly4}</li>`
]

iii.map((item)=>{
 console.log(item);
f += item
//  g.innerHTML = `<div>${item}</div>`
})