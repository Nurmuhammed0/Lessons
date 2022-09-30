let button = document.querySelector('button');

let ul = document.querySelector('ul')
let li = document.querySelectorAll('li');


// mouseover
button.addEventListener('click', (()=>{
  let li = document.createElement('li')
  li.textContent = 'Ali😝😝😝'
  ul.appendChild(li)
  console.log('salam');
}))

// li.forEach((item)=>{
//   item.addEventListener('click',((e)=>{
//     // console.log(e.target);
//     // e.target.style.textDecoration = 'line-through';
//     e.target.style.opacity = '0.5'
//     // e.target.remove()
//     e.stopPropagation()
//   }))
// })

ul.addEventListener('click',(e)=>{
  if(e.target.nodeName == 'LI'){
    e.target.remove();
  }
   
})
