let button = document.querySelector('button');

let li = document.querySelectorAll('li');


// mouseover
button.addEventListener('click', (()=>{
  console.log('salam');
}))

li.forEach((item)=>{
  item.addEventListener('click',((e)=>{
    console.log(e.target);
    e.target.style.textDecoration = 'line-through';
    e.target.style.opacity = '0.5'
  }))
})

